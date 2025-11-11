const skins = [
    "SKINS/basic.css",
    "SKINS/dark.css",
    "SKINS/modern.css"
];

let current = 0;
document.getElementById("skinBtn").addEventListener("click", () => {
    debugger; // used later for the screenshot
    current = (current + 1) % skins.length;
    document.getElementById("skinLink").href = skins[current];
});
