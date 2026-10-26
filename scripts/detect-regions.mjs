import sharp from 'sharp';

const input = 'public/assets/aistudio/WhatsApp_Image_2026-10-26_at_7.10.57_PM_e13f935c.jpeg';
const { data, info } = await sharp(input)
  .raw()
  .toBuffer({ resolveWithObject: true });

const { width, height, channels } = info;

// For each y row, let's find the leftmost point of the person (white shirt or skin or hair or headphones)
// Notice the background red is very saturated red: R is high (>180), G is low (<50), B is low (<40).
// White shirt has high G and high B (e.g. G > 150, B > 150).
// Skin has R > 150, G > 90, B > 70.
// Hair has R < 80, G < 60, B < 60.
// Headphones are off-white/beige: R > 160, G > 140, B > 120.
// Laptop is silver/grey: R ~ G ~ B ~ 150-220.
// Red table at the bottom has R > 160, but might have reflections.

console.log('Scanning rows for the girl / table...');
for (let y = 100; y < 850; y += 60) {
  let textPixels = [];
  let personStart = -1;
  for (let x = 0; x < width; x++) {
    const idx = (y * width + x) * channels;
    const r = data[idx], g = data[idx+1], b = data[idx+2];
    
    // Check if red background:
    // Pure red background in this image:
    const isRedBg = r > 180 && g < 45 && b < 35 && (r - g > 130) && (r - b > 130);
    
    // In the left region (x < 600), non-red pixels are either text (white or dark) or her arm (y > 550)
    if (!isRedBg) {
      if (x > 500 && personStart === -1) {
        personStart = x;
      }
    }
  }
  console.log(`y=${y}: person starts around x=${personStart}`);
}
