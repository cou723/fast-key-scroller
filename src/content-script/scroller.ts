'use strict';
let intervalId: number | null;
document.addEventListener("keydown", function (event) {
    if (intervalId) return;
    if (!!document.activeElement && (document.activeElement.tagName === "TEXTAREA" || document.activeElement.tagName === "INPUT")) return;
    if (event.key === "ArrowUp") { event.preventDefault(); intervalId = setInterval(() => window.scrollBy(0, -50), 20); }
    if (event.key === "ArrowDown") { event.preventDefault(); intervalId = setInterval(() => window.scrollBy(0, 50), 20); }
});
document.addEventListener("keyup", function (event) {
    if ((event.key === "ArrowUp" || event.key === "ArrowDown") && intervalId !== null) {
        clearInterval(intervalId);
        intervalId = null;
    }
});
document.documentElement.style.scrollBehavior = "auto";
