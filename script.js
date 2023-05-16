let entrada = 1;

function cambiar(link){

    if(entrada==0){

         document.getElementById("iniciar-sesion").className = "iniciar-sesion salir";
         document.getElementById("crear-cuenta").className = "crear-cuenta mostrar";

         entrada = 1;
         link.innerHTML = "Iniciar sesion";
    }
    else{
        
        document.getElementById("iniciar-sesion").className = "crear-cuenta mostrar";
        document.getElementById("crear-cuenta").className = "iniciar-sesion salir";

        entrada = 0;
        link.innerHTML = "Crear cuenta";
    }
}