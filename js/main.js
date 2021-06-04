const toggleActive = (e) => {
    const target = e.target;
    const curActive = document.querySelector(".menu-active");
    if(target === curActive) return;
    curActive.classList.remove("menu-active");
    target.classList.add("menu-active");
}

window.addEventListener("load", () => {
    const lists = document.querySelectorAll(".nav-li");
    for(li of lists) li.onclick = toggleActive;
})