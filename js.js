const song = document.getElementById("song");
const btn = document.getElementById("playBtn");

// set correct icon on load
function updateIcon() {
    btn.textContent = song.paused ? "▶" : "❚❚";
}

// autoplay might start playing
song.addEventListener("play", updateIcon);
song.addEventListener("pause", updateIcon);

// toggle on click
btn.addEventListener("click", () => {
    song.paused ? song.play() : song.pause();
});

document.addEventListener("mousedown", () => {
    if (document.activeElement) {
        document.activeElement.blur();
    }
});

//js for pages
async function showPage(page) {
    const response = await fetch(`${page}.html`);
    const html = await response.text();

    document.getElementById("content").innerHTML = html; }


    
    async function showPage(page) {
    const response = await fetch(`${page}.html`);
    const html = await response.text();
    document.getElementById("content").innerHTML = html;
}

// Load home page automatically
showPage("home");