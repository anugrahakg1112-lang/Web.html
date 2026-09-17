/* ========================================
   MC ADDONS - SCRIPT.JS
======================================== */


/* ========================================
   MOBILE MENU
======================================== */

function toggleMenu() {

    const nav = document.getElementById("navMenu");

    if (!nav) return;

    nav.classList.toggle("active");

}


/* ========================================
   CLOSE MENU AFTER CLICK
======================================== */

document.addEventListener("DOMContentLoaded", () => {

    const navLinks = document.querySelectorAll("#navMenu a");
    const nav = document.getElementById("navMenu");

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            nav.classList.remove("active");

        });

    });

});


/* ========================================
   SEARCH ADDONS
======================================== */

function searchAddons() {

    const input =
        document.getElementById("searchInput");

    const addonList =
        document.getElementById("addonList");

    if (!input || !addonList) return;

    const keyword =
        input.value.toLowerCase().trim();

    const cards =
        addonList.querySelectorAll(".addon-card");

    let found = 0;


    cards.forEach(card => {

        const text =
            card.textContent.toLowerCase();

        if (text.includes(keyword)) {

            card.style.display = "";

            found++;

        } else {

            card.style.display = "none";

        }

    });


    /* SEARCH RESULT */

    let result =
        document.getElementById("searchResult");


    if (!result) {

        result =
            document.createElement("p");

        result.id = "searchResult";

        result.style.marginTop = "20px";
        result.style.color = "#8f9992";
        result.style.fontSize = "13px";

        addonList.parentNode.insertBefore(
            result,
            addonList
        );

    }


    if (keyword === "") {

        result.textContent = "";

    } else if (found === 0) {

        result.textContent =
            "❌ Addon tidak ditemukan.";

    } else {

        result.textContent =
            `🔎 ${found} addon ditemukan.`;

    }

}


/* ========================================
   DOWNLOAD BUTTON EFFECT
======================================== */

document.addEventListener("DOMContentLoaded", () => {

    const buttons =
        document.querySelectorAll(".download-btn");


    buttons.forEach(button => {

        button.addEventListener("click", () => {

            const originalText =
                button.innerHTML;


            button.innerHTML =
                "⏳ MEMPROSES...";

            button.style.pointerEvents =
                "none";


            setTimeout(() => {

                button.innerHTML =
                    "✓ DOWNLOAD";

                button.style.pointerEvents =
                    "";

            }, 1800);

        });

    });

});


/* ========================================
   SCROLL REVEAL
======================================== */

document.addEventListener("DOMContentLoaded", () => {

    const cards =
        document.querySelectorAll(".addon-card");


    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.style.opacity = "1";
                        entry.target.style.transform =
                            "translateY(0)";

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.12
            }
        );


    cards.forEach((card, index) => {

        card.style.opacity = "0";

        card.style.transform =
            "translateY(25px)";

        card.style.transition =
            `opacity 0.5s ease ${index * 0.08}s,
             transform 0.5s ease ${index * 0.08}s`;

        observer.observe(card);

    });

});


/* ========================================
   DOWNLOAD NOTIFICATION
======================================== */

function showDownloadNotification(name) {

    let notification =
        document.getElementById(
            "downloadNotification"
        );


    if (!notification) {

        notification =
            document.createElement("div");

        notification.id =
            "downloadNotification";


        notification.style.position =
            "fixed";

        notification.style.bottom =
            "25px";

        notification.style.left =
            "50%";

        notification.style.transform =
            "translateX(-50%) translateY(100px)";


        notification.style.zIndex =
            "99999";

        notification.style.padding =
            "14px 20px";

        notification.style.border =
            "1px solid #35663e";

        notification.style.borderRadius =
            "10px";

        notification.style.background =
            "#101711";

        notification.style.color =
            "#ffffff";

        notification.style.boxShadow =
            "0 15px 40px rgba(0,0,0,.45)";

        notification.style.fontSize =
            "13px";

        notification.style.transition =
            "0.35s";


        document.body.appendChild(
            notification
        );

    }


    notification.innerHTML =
        `⬇️ Download dimulai: <b>${name}</b>`;


    requestAnimationFrame(() => {

        notification.style.transform =
            "translateX(-50%) translateY(0)";

    });


    setTimeout(() => {

        notification.style.transform =
            "translateX(-50%) translateY(100px)";

    }, 2500);

}


/* ========================================
   CONNECT DOWNLOAD BUTTON
======================================== */

document.addEventListener("DOMContentLoaded", () => {

    const buttons =
        document.querySelectorAll(".download-btn");


    buttons.forEach(button => {

        button.addEventListener("click", () => {

            const card =
                button.closest(".addon-card");

            if (!card) return;


            const title =
                card.querySelector("h3");


            const addonName =
                title
                    ? title.textContent.trim()
                    : "Addon";


            showDownloadNotification(
                addonName
            );

        });

    });

});


/* ========================================
   ESC KEY - CLOSE MENU
======================================== */

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        const nav =
            document.getElementById("navMenu");

        if (nav) {

            nav.classList.remove("active");

        }

    }

});


/* ========================================
   CONSOLE
======================================== */

console.log(
    "%c⛏️ MC ADDONS WEBSITE",
    "font-size:20px;font-weight:bold;"
);

console.log(
    "Website berhasil dimuat."
);
