let current = 0;

function applyPalette(palette) {
    document.documentElement.style.setProperty("--bg-color", palette.colors[0]);
    document.documentElement.style.setProperty("--primary-color", palette.colors[1]);
    document.documentElement.style.setProperty("--accent-color", palette.colors[2]);
    document.documentElement.style.setProperty("--support-color", palette.colors[3]);
    document.getElementById("paletteName").textContent = palette.name;
    document.getElementById("paletteColors").textContent =
    `BG: ${palette.colors[0]} | Primary: ${palette.colors[1]} | Accent: ${palette.colors[2]} | Support: ${palette.colors[3]}`;
}

function switchPalette() {
    current = (current + 1) % palettes.length;
    applyPalette(palettes[current]);
    document.getElementById("paletteIndex").textContent = current + 1;
}

// init
applyPalette(palettes[current]);