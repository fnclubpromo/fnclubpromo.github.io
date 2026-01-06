// Theme toggle
const toggle = document.getElementById("themeToggle");

if (toggle) {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    toggle.textContent = "☀️";
  }

  toggle.onclick = () => {
    document.body.classList.toggle("dark");
    const isDark = document.body.classList.contains("dark");
    toggle.textContent = isDark ? "☀️" : "🌙";
    localStorage.setItem("theme", isDark ? "dark" : "light");
  };
}

// Portfolio render
const container = document.getElementById("portfolio");

if (container) {
  artists.forEach(item => {
    container.innerHTML += `
      <div class="card">
        <h3>${item.artist}</h3>
        <p>${item.song}</p>
        <iframe src="${item.spotify_embed}" width="100%" height="80"></iframe>
        <p>Streams:
          <span class="counter" data-target="${item.streams_after}">0</span>
        </p>
      </div>
    `;
  });

  document.querySelectorAll(".counter").forEach(counter => {
    const target = +counter.dataset.target;
    let count = 0;

    const update = () => {
      count += target / 100;
      if (count < target) {
        counter.textContent = Math.ceil(count).toLocaleString();
        requestAnimationFrame(update);
      } else {
        counter.textContent = target.toLocaleString();
      }
    };
    update();
  });
}
