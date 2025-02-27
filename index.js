document.addEventListener("DOMContentLoaded", function () {
    let messageBox = document.getElementById("scroll-message");
    let hasAppeared = false; // Make sure it stays visible once shown

    window.addEventListener("scroll", function () {
        let scrollPosition = window.scrollY;
        let triggerPosition = 200; // Adjust where message appears

        if (scrollPosition > triggerPosition && !hasAppeared) {
            messageBox.classList.add("visible");
            hasAppeared = true; // Prevent it from disappearing
        }
    });
});
