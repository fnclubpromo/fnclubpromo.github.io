// Dark/Light Toggle
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Render Portfolio Results
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("resultsContainer");
  if (!container || typeof artists === "undefined") return;

  artists.forEach(item => {
    const card = document.createElement("div");
    card.className = "result-card";

    card.innerHTML = `
      <h3>${item.artist}</h3>
      <p>${item.song}</p>
      <strong>${item.streams_after} streams</strong>
      ${
        item.spotify_embed
          ? `<iframe src="https://open.spotify.com/embed/album/${item.spotify_embed.split('/').pop()}" width="100%" height="80" frameborder="0" allow="encrypted-media"></iframe>`
          : ""
      }
    `;

    container.appendChild(card);
  });
});
