import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imagesDir = path.join(__dirname, '../public/images');

async function convertImages() {
  if (!fs.existsSync(imagesDir)) {
    console.error(`Directory not found: ${imagesDir}`);
    process.exit(1);
  }

  const files = fs.readdirSync(imagesDir);

  for (const file of files) {
    if (file.match(/\.(jpg|jpeg|png)$/i)) {
      const inputPath = path.join(imagesDir, file);
      const outputPath = path.join(imagesDir, file.replace(/\.(jpg|jpeg|png)$/i, '.webp'));

      console.log(`Converting ${file} to WebP...`);
      
      try {
        await sharp(inputPath)
          .webp({ quality: 80 })
          .toFile(outputPath);
        console.log(`Saved ${outputPath}`);
      } catch (err) {
        console.error(`Error converting ${file}:`, err);
      }
    }
  }
}

convertImages();
