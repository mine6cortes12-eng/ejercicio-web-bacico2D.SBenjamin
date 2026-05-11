const menu = document.querySelector("styles.css");
const header = document.querySelector("mi-encabezado");
const headerHeight = header.offsetHeight;
window.addEventListener("scroll", () => {
    if (window.scrollY > headerHeight) {
        menu.style.backgroundColor = "rgb(50,43,150)";
        } 
        else{
            menu.style.backgroundColor = "rgba(0, 0, 0, 0)";
        }
    }); 