document.addEventListener("DOMContentLoaded", async () => {
    try {
        const response = await fetch("https://gilbertclaus.pythonanywhere.com/list-pictures");
        const data = await response.json();

        const slider = document.querySelector(".slider");
        const entries = Object.entries(data)
        .filter(([_, url]) => url.includes("/gallery/covers"));

        slider.style.setProperty('--quantity', entries.length);

        entries.forEach(([name, url], index) => {
        const item = document.createElement("div");
        item.className = "item";
        item.style.setProperty('--position', index + 1);

        const img = document.createElement("img");
        img.src = url;
        img.alt = name;

        item.appendChild(img);
        slider.appendChild(item);
        });

    } catch (err) {
        console.error("Gagal mengambil gambar:", err);
    }
});
  