//Esta accion maneja los sub submenu

//La funcion outPopup busca el ID contenedor general y le aplica el estilo que remueve todo el popup cuando, se hace click en el boton de cerrar
//function outPopup(){
//    document.getElementById("popupPromociones").classList.toggle("submenu-remove");
//}

//Al hacer click en cerrar se activa la funcion que carga el estilo remove
//document.getElementById("botonPopup").onclick = function(){
//    outPopup();
//}


//Togle Mobile Menu
$(function() {
    $(".toggle").on("click", function() {
        if ($(".item").hasClass("active")) {
            $(".item").removeClass("active");
            $(this).find("a").html("<i class='fas fa-bars'></i>");
        } else {
            $(".item").addClass("active");
            $(this).find("a").html("<i class='fas fa-times'></i>");
        }
    });
});

const toggle = document.querySelector('.toggle');
const menu = document.querySelector('.menu');

function toggleMenu() {
    if(menu.classList.contains("active")){
        menu.classList.remove("active");
        toggle.querySelector("a").innerHTML = "<i class='fas fa-bars'></i>";
    } else{
        menu.classList.add("active");
        toggle.querySelector("a").innerHTML = "<i class='fas fa-times'></i>";
    }
}

toggle.addEventListener('click', toggleMenu, false);



//Submenu
const items = document.querySelectorAll('.item');

function toggleItem() {
    if (this.classList.contains("submenu-active")) {
        this.classList.remove("submenu-active");
    } else if (menu.querySelector(".submenu-active")){
        menu.querySelector(".submenu-active").classList.remove("submenu-active");
        this.classList.add("submenu-active");
    } else {
        this.classList.add("submenu-active");
    }
}

for (let item of items) {
    if (item.querySelector('.submenu')) {
        item.addEventListener('click', toggleItem, false);
        item.addEventListener('keypress', toggleItem, false);
    }
}

document.addEventListener('click', closeSubmenu, false);

