import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ASSETS_DIR = path.resolve(__dirname, '../public/assets');

async function processImages() {
    console.log('Starting image optimization with sharp...');

    // 1. Convert texture-fallback.png to WebP
    const texturePath = path.join(ASSETS_DIR, 'texture-fallback.png');
    if (fs.existsSync(texturePath)) {
        console.log('Converting texture-fallback.png to WebP...');
        await sharp(texturePath)
            .webp({ quality: 80 })
            .toFile(path.join(ASSETS_DIR, 'texture-fallback.webp'));
        console.log('✓ Converted texture-fallback.webp');
    }

    // 2. Find ALL thumb-*.webp files dynamically
    const allFiles = fs.readdirSync(ASSETS_DIR);
    const thumbs = allFiles.filter(file => file.startsWith('thumb-') && file.endsWith('.webp') && !file.includes('@2x'));

    for (const thumb of thumbs) {
        const filePath = path.join(ASSETS_DIR, thumb);
        if (fs.existsSync(filePath)) {
            console.log(`Processing ${thumb}...`);
            const ext = path.extname(thumb);
            const base = path.basename(thumb, ext);

            try {
                // Generate 2x
                await sharp(filePath)
                    .resize({ height: 1200, withoutEnlargement: true })
                    .webp({ quality: 85 })
                    .toFile(path.join(ASSETS_DIR, `${base}@2x.webp`));

                // Generate 1x and overwrite original (read to buffer first to allow overwrite)
                const buffer = await sharp(filePath)
                    .resize({ height: 600, withoutEnlargement: true })
                    .webp({ quality: 80 })
                    .toBuffer();
                
                fs.writeFileSync(filePath, buffer);
                console.log(`✓ Optimized ${thumb} (1x and 2x created)`);
            } catch (err) {
                console.error(`Error processing ${thumb}:`, err.message);
            }
        }
    }

    // 3. Re-compress thumb-decor-created.webp
    const decorPath = path.join(ASSETS_DIR, 'thumb-decor-created.webp');
    if (fs.existsSync(decorPath)) {
        const buffer = await sharp(decorPath)
            .webp({ quality: 70 })
            .toBuffer();
        fs.writeFileSync(decorPath, buffer);
        console.log('✓ Re-compressed thumb-decor-created.webp');
    }

    console.log('Image Optimization Complete.');
}

processImages().catch(console.error);
