const mousemove = document.querySelector(".mousemove");
console.log(mousemove);
window.addEventListener("mousemove", (e) => {
    mousemove.style.left = e.pageX + "px";
    mousemove.style.top = e.pageY + "px";
    console.log(mousemove.style.left);
});

window.addEventListener("mousedown", () => {
    mousemove.style.transform = "scale(1) translate(-25%, -25%)";
    mousemove.style.display = "none";
});
