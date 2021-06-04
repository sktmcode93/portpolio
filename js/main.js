const menuKey = {
    "Profile" : 0,
    "Skill" : 1,
    "Portfolio" : 2 
}
const toggleActive = (e) => {
    const target = e.target;
    const curActive = document.querySelector(".menu-active");
    if(target === curActive) return;
    curActive.classList.remove("menu-active");
    target.classList.add("menu-active");
    const page = menuKey[target.innerText];
    const container = document.querySelector(".container");
    container.style.left = `${page*(-1000)}px`;
}
window.addEventListener("load", () => {
    const lists = document.querySelectorAll(".nav-li");
    for(li of lists) li.onclick = toggleActive;
})