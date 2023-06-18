const hum = document.querySelector(".hidden-menu-nav");
const linksMob = document.querySelector(".links-list-nav-mobile");
const st = document.querySelectorAll(".hidden-menu-nav .st") 
hum.onclick = () => {
    linksMob.classList.toggle("trans-0");
    st.forEach(s => {
        s.classList.toggle("w-40")
    });
}