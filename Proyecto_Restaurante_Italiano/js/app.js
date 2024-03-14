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
    if(document.querySelectorAll('.pantalla-completa').length > 0) return;
    body.appendChild(overlay);
    btnCerrar.textContent = 'x';
    btnCerrar.classList.add('btn-cerrar');
    // while(navegacion.children[5]){
    //     navegacion.removeChild(navegacion.children[5]);
    // }


    navegacion.appendChild(btnCerrar);
    cerrarMenu(btnCerrar, overlay);
}

const cerrarMenu = (boton, overlay) =>{
    boton.addEventListener('click', ()=>{
        navegacion.classList.add('ocultar');
        overlay.remove();
        boton.remove();
    });

    overlay.onclick =function(){
        overlay.remove();
        navegacion.classList.add('ocultar');
    }
}






















//LINK DEL VIDEO: https://www.youtube.com/watch?v=QUCJ_CpkFbo&list=PLarV53MJTFV39oxNJScsqTNYwBQzRs-MJ&ab_channel=AzaelW3b
//TIEMPO: 1:27:00