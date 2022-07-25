// - Crea una variable con tu nombre
const nombre = "Esteban";

// - Crea una variable con tu apellido
const apellido = "Alban";

// - Crea un objeto con tu nombre y tu apellido
const obj = {nombre, apellido};

// console.log(obj);

// - Almacena el objeto anterior en la SessionStorage
sessionStorage.setItem("persona", JSON.stringify(obj));

// - Almacena el objeto anterior en la LocalStorage
localStorage.setItem("persona", JSON.stringify(obj));

document.cookie = "nuevaCookie=objCookie";
document.cookie = "caducidadCookie=Persona;expires =" + new Date (2022, 06, 24, 21, 35, 0).toUTCString();