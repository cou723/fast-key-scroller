"use strict";
let intervalId: number | null = null;
// test comment out
document.addEventListener("keydown", function (event) {
    if (intervalId) return;
    console.log(document.activeElement);
    if (!(document.activeElement instanceof HTMLElement)) return;
    const activeElement = document.activeElement as HTMLElement;
    if (activeElement.tagName === "TEXTAREA" || activeElement.tagName === "INPUT" || activeElement.role === "textbox")
        return;
    if (event.key === "ArrowUp") {
        event.preventDefault();
        intervalId = setInterval(() => window.scrollBy(0, -50), 20);
    }
    if (event.key === "ArrowDown") {
        event.preventDefault();
        intervalId = setInterval(() => window.scrollBy(0, 50), 20);
    }
});
document.addEventListener("keyup", function (event) {
    if ((event.key === "ArrowUp" || event.key === "ArrowDown") && intervalId !== null) {
        clearInterval(intervalId);
        intervalId = null;
    }
});
document.documentElement.style.scrollBehavior = "auto";
