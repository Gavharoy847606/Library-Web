// ================= FLASH SALE TIMER =================
function startFlashTimer() {
    let time = 5 * 60 * 60; // 5 soat

    const timerBox = document.querySelector(".timer");
    if (!timerBox) return;

    setInterval(() => {
        let h = Math.floor(time / 3600);
        let m = Math.floor((time % 3600) / 60);
        let s = time % 60;

        timerBox.textContent =
            `${String(h).padStart(2, "0")} : ${String(m).padStart(2, "0")} : ${String(s).padStart(2, "0")}`;

        if (time > 0) time--;
    }, 1000);
}
startFlashTimer();


// ================= VIEW ALL MESSAGE =================
document.querySelectorAll(".section-header a").forEach(button => {
    button.addEventListener("click", (e) => {
        e.preventDefault();
        alert("View All funksiyasi keyingi versiyada qo‘shiladi 🙂");
    });
});


// ================= SEARCH INPUT ANIMATSIYA =================
let search = document.querySelector(".navbar input");

if (search) {
    search.addEventListener("focus", () => {
        search.style.border = "1px solid #ffb347";
        search.style.boxShadow = "0 0 8px #ffca7a";
    });

    search.addEventListener("blur", () => {
        search.style.border = "1px solid #ccc";
        search.style.boxShadow = "none";
    });
}


// ================= BUTTONLAR HOVER ANIMATSIYA =================
document.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("mouseenter", () => {
        btn.style.transform = "scale(1.05)";
        btn.style.transition = "0.2s";
    });

    btn.addEventListener("mouseleave", () => {
        btn.style.transform = "scale(1)";
    });
});


// ================= KITOB KARTALAR ANIMATSIYA =================
document.querySelectorAll(".book-card img, .flash-card img").forEach(img => {
    img.addEventListener("mouseenter", () => {
        img.style.transform = "scale(1.08)";
        img.style.transition = "0.3s";
        img.style.boxShadow = "0 6px 18px rgba(0,0,0,0.2)";
    });

    img.addEventListener("mouseleave", () => {
        img.style.transform = "scale(1)";
        img.style.boxShadow = "none";
    });
});
