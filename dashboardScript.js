// Crear un elemento div del sidebar 

const sidebar = document.createElement("div");
sidebar.classList.add("sidebar", "sidebar.open");

const Logo_details = document.createElement("div");
Logo_details.classList.add("logo_details");

const icon = document.createElement("i");
icon.classList.add("icon", "fas", "fa-code");
icon.id = "icon";


const logo_name = document.createElement("div");
logo_name.classList.add("logo_name");
logo_name.textContent = ("CodingJoaco");

const menuBars = document.createElement("i");
menuBars.classList.add("menuBars", "fas", "fa-bars");
menuBars.id = "menuBars";


// Controlador de eventos para el botón de menú
menuBars.addEventListener("click", () => {
    sidebar.classList.toggle("open");
});

//------------------------------- barra navegacion --------------------------------------

const ul = document.createElement("navbar");
ul.classList.add("nav-list");

//---------------------------  primer icono de la barra navegacion ----------------------

const liUno = document.createElement("li");

const aUno = document.createElement("a");


const iconUno = document.createElement("i");
iconUno.classList.add( "icon", "fas", "fa-box-archive");
iconUno.id = "iconUno";

const Areas = document.createElement("span");
Areas.classList.add("link_name");
Areas.textContent = "Areas";

const areas = document.createElement("span");
areas.classList.add("tooltip");
areas.textContent = "Areas";

//---------------------------  segundo icono de la barra navegacion ----------------------

const liTres = document.createElement("li");

const aTres = document.createElement("a");

const iconTres = document.createElement("i");
iconTres.classList.add( "icon", "fas", "fa-utensils");
iconTres.id = "iconTres";

const Mesas = document.createElement("span");
Mesas.classList.add("link_name");
Mesas.textContent = "Mesas";

const mesas = document.createElement("span");
mesas.classList.add("tooltip");
mesas.textContent = "Mesas";

//---------------------------  tercer icono de la barra navegacion ----------------------

const liCuatro = document.createElement("li");

const aCuatro = document.createElement("a");

const iconCuatro = document.createElement("i");
iconCuatro.classList.add("icon", "fas", "fa-cart-shopping");
iconCuatro.id = "iconCuatro";

const Shop = document.createElement("span");
Shop.classList.add("link_name");
Shop.textContent = "Orden";

const shop = document.createElement("span");
shop.classList.add("tooltip");
shop.textContent = "Orden";

//----------------------------  cuarto icono de la barra navegacion ----------------------

const liCinco = document.createElement("li");

const aCinco = document.createElement("a");

const iconCinco = document.createElement("i");
iconCinco.classList.add("icon", "fas", "fa-truck-fast");
iconCinco.id = "iconCinco";

const Delivery = document.createElement("span");
Delivery.classList.add("link_name");
Delivery.textContent = "Domicilios";

const delivery = document.createElement("span");
delivery.classList.add("tooltip");
delivery.textContent = "Domicilios";

//--------------------  cuarto icono de la barra navegacion  " profile "  ----------------

const profile = document.createElement("li");
profile.classList.add("profile");

const profileDiv = document.createElement("div");
profileDiv.classList.add("profile_details");

//crea la constante img

const nameJob = document.createElement("div");
nameJob.classList.add("name_job");

const nombre = document.createElement("div");
nombre.classList.add("name");
nombre.textContent = "Joaco";

const job = document.createElement("div");
job.classList.add("job");
job.textContent = "web design";

const cerrar = document.createElement("a");
cerrar.classList.add("botonCerrar");

const iconCerrar = document.createElement("i");
iconCerrar.classList.add("icon", "fas", "fa-reply");
iconCerrar.id = "botonCerrar";

//---------------------  Adjunta los elementos al DOM ------------------------------------

sidebar.appendChild(Logo_details);
sidebar.appendChild(menuBars);
sidebar.appendChild(ul);


Logo_details.appendChild(logo_name);
Logo_details.appendChild(icon);


ul.appendChild(liUno);
ul.appendChild(liTres);
ul.appendChild(liCuatro);
ul.appendChild(liCinco);
ul.appendChild(profile);

//----------------------------------------- Item 1  ---------------------------------------

liUno.appendChild(aUno);
aUno.appendChild(iconUno);
aUno.appendChild(Areas);
aUno.appendChild(areas);

//----------------------------------------- Item 2  ---------------------------------------

liTres.appendChild(aTres);
aTres.appendChild(iconTres);
aTres.appendChild(Mesas);
aTres.appendChild(mesas);

//----------------------------------------- Item 3  ---------------------------------------

liCuatro.appendChild(aCuatro);
aCuatro.appendChild(iconCuatro);
aCuatro.appendChild(Shop);
aCuatro.appendChild(shop);

//----------------------------------------- Item 4  ---------------------------------------

liCinco.appendChild(aCinco);
aCinco.appendChild(iconCinco);
aCinco.appendChild(Delivery);
aCinco.appendChild(delivery);

//----------------------------------------- Item 4  ---------------------------------------

profile.appendChild(profileDiv);
profile.appendChild(cerrar);

profileDiv.appendChild(nameJob);

nameJob.appendChild(nombre);
nameJob.appendChild(job);

cerrar.appendChild(iconCerrar);


// Aqui puedes adjuntar el sidebar al contenedor principal en tu HTML
const dashboardCajero = document.getElementById("dashboardCajero"); 
dashboardCajero.appendChild(sidebar);