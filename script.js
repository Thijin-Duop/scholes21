
// ===================================
// SCHOLES & ROSALIA LOVE WEBSITE ❤️
// Main JavaScript
// ===================================

document.addEventListener("DOMContentLoaded", function () {

    // ===================================
    // 1. OPEN THE LOVE STORY
    // ===================================

    const openButton = document.getElementById("open-story");
    const welcomeScreen = document.getElementById("welcome-screen");
    const mainWebsite = document.getElementById("main-website");
    const video = document.getElementById("background-video");

    if (openButton && welcomeScreen && mainWebsite) {
        openButton.addEventListener("click", function () {

            createHearts(35);

            welcomeScreen.classList.add("fade-out");

            setTimeout(function () {
                welcomeScreen.classList.add("hidden");
                mainWebsite.classList.remove("hidden");

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

            }, 800);

            if (video) {
                video.play().catch(function (error) {
                    console.log("Video playback was not started:", error);
                });
            }
        });
    }


    // ===================================
    // 2. FLOATING HEARTS
    // ===================================

    const heartsBackground = document.getElementById("hearts-background");

    function createHearts(number) {

        if (!heartsBackground) return;

        const heartSymbols = ["❤️", "💗", "💕", "💖", "💓"];

        for (let i = 0; i < number; i++) {

            const heart = document.createElement("span");

            heart.classList.add("floating-heart");

            heart.textContent =
                heartSymbols[Math.floor(Math.random() * heartSymbols.length)];

            heart.style.left = Math.random() * 100 + "%";
            heart.style.fontSize = (12 + Math.random() * 22) + "px";
            heart.style.animationDuration = (5 + Math.random() * 7) + "s";
            heart.style.animationDelay = (Math.random() * 2) + "s";

            heartsBackground.appendChild(heart);

            setTimeout(function () {
                heart.remove();
            }, 14000);
        }
    }

    // Create background hearts regularly.
    if (heartsBackground) {
        setInterval(function () {
            createHearts(3);
        }, 4000);
    }


    // ===================================
    // 3. RELATIONSHIP COUNTER
    // ===================================

    const relationshipDate = new Date(2018, 1, 21, 0, 0, 0);

    function updateRelationshipCounter() {

        const now = new Date();
        const difference = now - relationshipDate;

        if (difference < 0) return;

        const secondsTotal = Math.floor(difference / 1000);

        const days = Math.floor(secondsTotal / 86400);
        const hours = Math.floor((secondsTotal % 86400) / 3600);
        const minutes = Math.floor((secondsTotal % 3600) / 60);
        const seconds = secondsTotal % 60;

        const daysElement = document.getElementById("days");
        const hoursElement = document.getElementById("hours");
        const minutesElement = document.getElementById("minutes");
        const secondsElement = document.getElementById("seconds");

        if (daysElement) daysElement.textContent = days;
        if (hoursElement) hoursElement.textContent = hours;
        if (minutesElement) minutesElement.textContent = minutes;
        if (secondsElement) secondsElement.textContent = seconds;
    }

    updateRelationshipCounter();
    setInterval(updateRelationshipCounter, 1000);


    // ===================================
    // 4. MOBILE NAVIGATION
    // ===================================

    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");

    if (menuToggle && navMenu) {

        menuToggle.addEventListener("click", function () {

            navMenu.classList.toggle("active");

            menuToggle.textContent =
                navMenu.classList.contains("active") ? "✕" : "☰";
        });

        navMenu.querySelectorAll("a").forEach(function (link) {

            link.addEventListener("click", function () {

                navMenu.classList.remove("active");
                menuToggle.textContent = "☰";

            });

        });
    }


    // ===================================
    // 5. STORY CHAPTER ANIMATIONS
    // ===================================

    const chapterCards = document.querySelectorAll(".chapter-card");

    if ("IntersectionObserver" in window) {

        const chapterObserver = new IntersectionObserver(
            function (entries, observer) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("visible");

                        observer.unobserve(entry.target);
                    }

                });

            },
            {
                threshold: 0.12
            }
        );

        chapterCards.forEach(function (card) {
            chapterObserver.observe(card);
        });

    } else {

        chapterCards.forEach(function (card) {
            card.classList.add("visible");
        });

    }


    // ===================================
    // 6. SURPRISE LOVE MESSAGE
    // ===================================

    const surpriseButton = document.getElementById("surprise-btn");
    const surpriseMessage = document.getElementById("surprise-message");

    if (surpriseButton && surpriseMessage) {

        surpriseButton.addEventListener("click", function () {

            surpriseMessage.classList.toggle("hidden");

            if (surpriseMessage.classList.contains("hidden")) {

                surpriseButton.textContent = "Open My Surprise 💗";

            } else {

                surpriseButton.textContent = "Close My Surprise 💕";

                createHearts(20);

            }

        });
    }


    // ===================================
    // 7. VIDEO PLAYER CLOSE BUTTON
    // ===================================

    const closeVideoButton = document.getElementById("close-video");
    const videoPlayer = document.getElementById("video-player");

    if (closeVideoButton && videoPlayer) {

        closeVideoButton.addEventListener("click", function () {

            if (video) {
                video.pause();
            }

            videoPlayer.classList.add("hidden");

        });
    }


    // ===================================
    // 8. LOVE QUESTIONNAIRE
    // EMAIL: thijinsymondz@gmail.com
    // ===================================

    const loveForm = document.getElementById("love-form");
    const formStatus = document.getElementById("form-status");
    const submitButton = document.getElementById("submit-btn");

    const emailAddress = "thijinsymondz@gmail.com";

    if (loveForm) {

        loveForm.addEventListener("submit", async function (event) {

            event.preventDefault();

            if (!loveForm.checkValidity()) {
                loveForm.reportValidity();
                return;
            }

            if (submitButton) {
                submitButton.disabled = true;
                submitButton.textContent = "Sending your answers... 💗";
            }

            if (formStatus) {
                formStatus.textContent = "Sending your message... ❤️";
            }

            const formData = new FormData(loveForm);

            formData.append(
                "_subject",
                "A new love story response from Rosalia ❤️"
            );

            formData.append("_captcha", "false");

            try {

                const response = await fetch(
                    `https://formsubmit.co/ajax/${emailAddress}`,
                    {
                        method: "POST",
                        body: formData,
                        headers: {
                            "Accept": "application/json"
                        }
                    }
                );

                const result = await response.json();

                if (
                    response.ok &&
                    String(result.success).toLowerCase() === "true"
                ) {

                    if (formStatus) {
                        formStatus.textContent =
                            "Your answers have been sent successfully. Thank you, Rosalia! ❤️";

                        formStatus.style.color = "#15803d";
                    }

                    loveForm.reset();

                    createHearts(25);

                } else {

                    throw new Error(
                        result.message || "Unable to send your answers."
                    );

                }

            } catch (error) {

                console.error("Form submission error:", error);

                if (formStatus) {
                    formStatus.textContent =
                        "Your answers could not be sent. Check your internet connection or email activation.";

                    formStatus.style.color = "#be185d";
                }

            } finally {

                if (submitButton) {
                    submitButton.disabled = false;
                    submitButton.textContent = "Send My Answers 💗";
                }

            }

        });

    }


    // ===================================
    // 9. SMOOTH PAGE SCROLLING
    // ===================================

    document.querySelectorAll('a[href^="#"]').forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = link.getAttribute("href");

            if (!targetId || targetId === "#") return;

            const target = document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    });


    // ===================================
    // 10. WEBSITE CONSOLE MESSAGE
    // ===================================

    console.log(
        "Welcome to Scholes ❤️ Rosalia - Our Story, Our Memories, Our Forever."
    );

});
