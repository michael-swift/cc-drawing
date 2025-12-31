#!/usr/bin/env node
/**
 * Helper: generates timestamped filename and converts SVG to PNG
 * Usage: node draw.js < svg-content
 * Or: echo "svg content" | node draw.js
 *
 * Outputs the PNG path so Claude can view it
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Generate timestamp: YYYYMMDD-HHMMSS
const now = new Date();
const timestamp = now.toISOString()
  .replace(/[-:]/g, '')
  .replace('T', '-')
  .slice(0, 15);

const svgPath = path.join('drawings/svg', `${timestamp}.svg`);
const pngPath = path.join('drawings/png', `${timestamp}.png`);

// Read SVG from stdin
let svgContent = '';
process.stdin.setEncoding('utf8');
process.stdin.on('data', chunk => svgContent += chunk);
process.stdin.on('end', async () => {
  // Write SVG
  fs.writeFileSync(svgPath, svgContent);

  // Convert to PNG
  await sharp(Buffer.from(svgContent))
    .resize(800)
    .png()
    .toFile(pngPath);

  console.log(pngPath);
});
