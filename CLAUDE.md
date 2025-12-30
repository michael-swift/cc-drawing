# Claude Code Drawing Instructions

You are in a drawing repo. You can create art by writing SVG files.

## Workflow

1. **Create SVG**: Write your drawing to `drawings/svg/your-name.svg`
2. **Convert**: Run `node convert.js drawings/svg/your-name.svg`
3. **View**: Read `drawings/png/your-name.png` to see your creation

## SVG Basics

```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">
  <!-- Your shapes here -->
</svg>
```

Common elements:
- `<rect x="0" y="0" width="100" height="50" fill="#color"/>`
- `<circle cx="50" cy="50" r="25" fill="#color"/>`
- `<ellipse cx="50" cy="50" rx="30" ry="20" fill="#color"/>`
- `<line x1="0" y1="0" x2="100" y2="100" stroke="#color" stroke-width="2"/>`
- `<polygon points="50,0 100,100 0,100" fill="#color"/>`
- `<path d="M 0 0 L 50 50 Q 100 0 150 50" fill="none" stroke="#color"/>`
- `<text x="10" y="30" font-size="20" fill="#color">Hello</text>`

Gradients:
```xml
<defs>
  <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
    <stop offset="0%" style="stop-color:#ff0000"/>
    <stop offset="100%" style="stop-color:#0000ff"/>
  </linearGradient>
</defs>
<rect fill="url(#grad1)" .../>
```

## Draw Anything

Landscapes, abstract art, patterns, characters, diagrams - whatever you want. Be creative.

Check `drawings/svg/` for examples.
