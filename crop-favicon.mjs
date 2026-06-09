import sharp from 'sharp';

async function cropIcon(path) {
  try {
    console.log(`Processing ${path}...`);
    // 1. Trim the image (removes transparent or solid background around the subject)
    const trimmed = sharp(path).trim({ threshold: 40 });
    const metadata = await trimmed.metadata();
    
    // 2. We want a square image.
    const finalSize = 512;
    // Let's add an 8% padding so it's not completely touching the edge
    const padding = Math.floor(finalSize * 0.08);
    const targetSize = finalSize - (padding * 2);

    const buffer = await trimmed
      .resize(targetSize, targetSize, { 
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 } 
      })
      .extend({
        top: padding,
        bottom: padding,
        left: padding,
        right: padding,
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      })
      .toBuffer();
      
    await sharp(buffer).toFile(path);
    console.log(`Successfully enlarged the logo in ${path}`);
  } catch (err) {
    console.log(`Skipped or failed for ${path}: ${err.message}`);
  }
}

async function run() {
  await cropIcon('src/app/icon.png');
  await cropIcon('src/app/apple-icon.png');
}

run();
