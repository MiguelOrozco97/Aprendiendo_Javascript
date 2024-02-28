const menu = document.querySelector('.hamburguesa');
const navegacion = document.querySelector('.navegacion');


document.addEventListener('DOMContentLoaded', ()=>{
    eventos();
});

const eventos = () =>{
    menu.addEventListener('click', abrirMenu);
}

const abrirMenu = () =>{
    navegacion.classList.remove('ocultar')
    botonCerrar();
}

const botonCerrar = () =>{
    const btnCerrar = document.createElement('P');
    const overlay = document.createElement('div');
    overlay.classList.add('pantalla-completa');
    const body = document.querySelector('body');
    body.appendChild(overlay);
    btnCerrar.textContent = 'x';
    btnCerrar.classList.add('btn-cerrar');
    navegacion.appendChild(btnCerrar);
    cerrarMenu(btnCerrar, overlay);
}

const cerrarMenu = (boton, overlay) =>{
    boton.addEventListener('click', ()=>{
        navegacion.classList.add('ocultar');
        overlay.remove();
    })
}






















//LINK DEL VIDEO: https://www.youtube.com/watch?v=QUCJ_CpkFbo&list=PLarV53MJTFV39oxNJScsqTNYwBQzRs-MJ&ab_channel=AzaelW3b
//TIEMPO: 1:27:00