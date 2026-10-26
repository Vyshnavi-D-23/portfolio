import sharp from 'sharp';

const input = 'public/assets/aistudio/WhatsApp_Image_2026-10-26_at_7.10.57_PM_e13f935c.jpeg';
const metadata = await sharp(input).metadata();
console.log('Metadata:', metadata);

const { data, info } = await sharp(input)
  .raw()
  .toBuffer({ resolveWithObject: true });

console.log('Raw info:', info);

// Sample background color at top-left (e.g., x=50, y=50)
const idx = (50 * info.width + 50) * info.channels;
console.log('Pixel at (50,50):', data[idx], data[idx+1], data[idx+2]);

// Sample at (200, 50)
const idx2 = (50 * info.width + 200) * info.channels;
console.log('Pixel at (200,50):', data[idx2], data[idx2+1], data[idx2+2]);

// Sample at (100, 300)
const idx3 = (300 * info.width + 100) * info.channels;
console.log('Pixel at (100,300):', data[idx3], data[idx3+1], data[idx3+2]);
