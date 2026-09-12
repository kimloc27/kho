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


/* Tự động bắn pháo hoa khi mở trang */

window.onload = function() {

    firework();

};