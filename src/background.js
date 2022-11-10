const imgs = ["avenue-g48c6ff3b5_1920.jpg", "forest-gfc028e085_1920.jpg", "planet-g2455188d5_1920.jpg", "sunrise-g82434d9a8_1920.jpg", "sunset-g1b5c086b0_1920.jpg"]

const randomImg = imgs[Math.floor(Math.random() *imgs.length)];

document.body.style.backgroundImage = `url(src/img/${randomImg})`;