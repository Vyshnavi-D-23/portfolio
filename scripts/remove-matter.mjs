import sharp from 'sharp';

const input = 'public/assets/aistudio/WhatsApp_Image_2026-10-26_at_7.10.57_PM_e13f935c.jpeg';
const output = 'public/assets/aistudio/vyshnavi_clean.jpeg';

const image = sharp(input);
const { data, info } = await image.raw().toBuffer({ resolveWithObject: true });
const { width, height, channels } = info;

// Top reference row at y = 135 has pure clean background red across all x from 0 to width
const refRowY = 135;
const refRow = [];
for (let x = 0; x < width; x++) {
  const idx = (refRowY * width + x) * channels;
  refRow.push([data[idx], data[idx + 1], data[idx + 2]]);
}

const outData = Buffer.from(data);

// 1. Top bar: all matter from y=0 to y=95 across width 0 to 1600
for (let y = 0; y < 95; y++) {
  for (let x = 0; x < width; x++) {
    const idx = (y * width + x) * channels;
    const [cr, cg, cb] = refRow[x];
    outData[idx] = cr;
    outData[idx + 1] = cg;
    outData[idx + 2] = cb;
  }
}

// 2. Left background region containing:
// - "Work"
// - "I'm a"
// - "Full Stack Developer"
// - "Fast, scalable and modern web"
// - "React, Node.js and Tailwind CSS"
// - "[ My Work ]" and "[ Contact Me ]" buttons
// Her shirt only starts at x > 385 for y in [470, 530], and x > 560 for y in [300, 470]
for (let y = 95; y < 530; y++) {
  // Safe right boundary for background cleanup:
  // At y = 95..400: x up to 570 is purely background (her hair starts at x > 690)
  // At y = 400..470: x up to 520 is purely background
  // At y = 470..530: x up to 375 is purely background (buttons are x < 365, shirt is x > 385)
  let maxX = 570;
  if (y >= 400 && y < 470) {
    maxX = 520;
  } else if (y >= 470) {
    maxX = 375;
  }

  // Right-side reference red pixel on the same row y for smooth horizontal lighting
  const rIdx = (y * width + 580) * channels;
  const rightR = data[rIdx];
  const rightG = data[rIdx + 1];
  const rightB = data[rIdx + 2];

  for (let x = 0; x <= maxX; x++) {
    const idx = (y * width + x) * channels;
    const [topR, topG, topB] = refRow[x];

    // Calculate natural gradient interpolation matching the original studio light
    const fx = x / 580;
    const fy = (y - refRowY) / 400;

    // The studio light drops very slightly towards the bottom left (less than 4-5 units)
    const targetR = Math.round(topR * (1 - fx * 0.25) + rightR * (fx * 0.25) - Math.max(0, fy * 3));
    const targetG = Math.round(topG * (1 - fx * 0.25) + rightG * (fx * 0.25) - Math.max(0, fy * 2));
    const targetB = Math.round(topB * (1 - fx * 0.25) + rightB * (fx * 0.25) - Math.max(0, fy * 2));

    outData[idx] = targetR;
    outData[idx + 1] = targetG;
    outData[idx + 2] = targetB;
  }
}

// Save clean image
await sharp(outData, { raw: { width, height, channels } })
  .jpeg({ quality: 98 })
  .toFile(output);

console.log('Successfully generated clean image:', output);
