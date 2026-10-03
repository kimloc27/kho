/* ================= POPUP ================= */

// Hiện popup
function showPopup() {

    document.getElementById("birthdayPopup").style.display = "flex";

}


// Đóng popup
function closePopup() {

    document.getElementById("birthdayPopup").style.display = "none";

}


/* ================= PHÁO HOA ================= */

function firework() {

    var duration = 3 * 1000;
    var end = Date.now() + duration;

    (function frame() {

        confetti({
            particleCount: 5,
            angle: 60,
            spread: 55,
            origin: {
                x: 0
            }
        });

        confetti({
            particleCount: 5,
            angle: 120,
            spread: 55,
            origin: {
                x: 1
            }
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }

    }());

}


/* ================= NHẠC SINH NHẬT ================= */

const music = document.getElementById("birthdayMusic");
const musicBtn = document.getElementById("musicBtn");


/* Tự phát nhạc khi người dùng click lần đầu */

document.addEventListener("click", function () {

    if (music.paused) {

        music.play()
            .then(() => {

                if (musicBtn) {
                    musicBtn.innerHTML = "🔇 Tắt nhạc";
                }

            })
            .catch(() => {

                console.log("Trình duyệt đang chặn tự động phát nhạc.");

            });

    }

}, { once: true });


/* Nút bật / tắt nhạc */

function toggleMusic() {

    if (music.paused) {

        music.play()
            .then(() => {

                musicBtn.innerHTML = "🔇 Tắt nhạc";

            })
            .catch(() => {

                alert("Không phát được nhạc! Hãy kiểm tra file happy-birthday.mp3 nha.");

            });

    } else {

        music.pause();

        musicBtn.innerHTML = "🎵 Bật nhạc sinh nhật";

    }

}


/* ================= KHI MỞ TRANG ================= */

window.onload = function () {

    firework();

};