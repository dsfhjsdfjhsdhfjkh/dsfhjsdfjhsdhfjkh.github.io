const song = document.getElementById("song");
const btn = document.getElementById("playBtn");

// set correct icon on load
function updateIcon() {
    btn.textContent = song.paused ? "▶" : "❚❚";
}

// autoplay might start playing
song.addEventListener("play", updateIcon);
song.addEventListener("pause", updateIcon);

//turn ts down
song.volume = 0.2;

// toggle on click
btn.addEventListener("click", () => {
    song.paused ? song.play() : song.pause();
});

document.addEventListener("mousedown", () => {
    if (document.activeElement) {
        document.activeElement.blur();
    }
});


// Load home page automatically
showPage("home");



// js for pages
async function showPage(page) {
    const response = await fetch(`${page}.html`);
    const html = await response.text();

    document.getElementById("content").innerHTML = html;

    // If we're on the projects page, set up the project links
    if (page === "projects") {

        // Blackjack
        const blackjackGame = document.getElementById("blackjackgame");

        blackjackGame.addEventListener("click", function(event) {
            event.preventDefault();

            document.getElementById("content").innerHTML = `
                <iframe src="blackjack/index.html"></iframe>
            `;
        });


        // Adventure Time
        const adventureTime = document.getElementById("adventuretime");

        adventureTime.addEventListener("click", function(event) {
            event.preventDefault();

            document.getElementById("content").innerHTML = `
                <iframe src="adventuretimesite/HTML/index.html"></iframe>
            `;
        });
    }
}
