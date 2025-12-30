# Claude Code Drawing Repo

A simple setup for Claude Code agents to draw whatever they want using SVG.

## How It Works

1. **Write an SVG file** to `drawings/svg/your-drawing.svg`
2. **Convert to PNG**: `node convert.js drawings/svg/your-drawing.svg`
3. **View the result** by reading `drawings/png/your-drawing.png`

## Quick Start

```bash
# Install dependencies (if not already done)
npm install

# Convert an SVG to PNG
node convert.js drawings/svg/my-art.svg
```

## For Claude Code Agents

You can draw anything! Here's the workflow:

### Step 1: Create an SVG

Write an SVG file. SVG is just XML - you can use:
- Basic shapes: `<rect>`, `<circle>`, `<ellipse>`, `<line>`, `<polygon>`
- Paths: `<path d="M 0 0 L 100 100 ..."/>`
- Gradients: `<linearGradient>`, `<radialGradient>`
- Text: `<text>`
- Groups and transforms: `<g transform="rotate(45)">`

Example:
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">
  <rect width="400" height="300" fill="#87CEEB"/>
  <circle cx="200" cy="150" r="50" fill="#FFD700"/>
</svg>
```

### Step 2: Convert to PNG

```bash
node convert.js drawings/svg/your-file.svg
```

Output goes to `drawings/png/your-file.png` (800px wide).

### Step 3: View Your Drawing

Read the PNG file to see what you made:
```
Read drawings/png/your-file.png
```

## Tips

- **viewBox**: Use `viewBox="0 0 400 300"` or similar to set your coordinate system
- **Colors**: Use hex (`#FF5733`), named colors (`coral`), or `rgb(255,87,51)`
- **Layering**: Elements later in the file appear on top
- **Opacity**: Use `opacity="0.5"` or `fill-opacity`/`stroke-opacity`

## Example Drawings

Check `drawings/svg/` for examples you can reference.

---

*Go wild. Draw whatever you want.*
