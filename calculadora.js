document.addEventListener("DOMContentLoaded", () => {
    /* Almacenamos los elementos más usados del DOM */
    let iniFecha = document.getElementById("ini-fecha");
    let iniHora = document.getElementById("ini-hora");
    let finFecha = document.getElementById("fin-fecha");
    let finHora = document.getElementById("fin-hora");
    let calcular = document.getElementById("calcular");
    let actual = document.getElementById("actual");
    /* Agregamos la función de reinicio de valores a la hora actual cuando pulsemos el botón */
    actual.addEventListener("click", () => {
        /* Obtenemos la fecha actual y calculamos fecha y hora */
        let ahora = new Date();
        let fecha = ahora.toISOString().substring(0, 10);
        let hora = ahora.toISOString().substring(11, 19);
        /* Cargamos los valores iniciales de los campos */
        iniFecha.value = fecha;
        iniHora.value = hora;
        finFecha.value = fecha;
        finHora.value = hora;
    });
    /* Al cargar la página realizamos un clic inicial */
    actual.click();
    /* Agregamos la función de cálculo cuando pulsemos el botón */
    calcular.addEventListener("click", () => {
        /* Convertimos los campos en fechas completas */
        let ini = new Date(
            [ iniFecha.value, iniHora.value ].join(" ")
        );
        let fin = new Date(
            [ finFecha.value, finHora.value ].join(" ")
        );
        /* Calculamos la diferencia en segundos, minutos y horas */
        let segundos = Math.abs(ini - fin) / 1000;
        let minutos = Math.floor(segundos / 60);
        segundos %= 60;
        let horas = Math.floor(minutos / 60);
        minutos %= 60;
        let resultado = [
            ("0" + horas).substr(-2),
            ("0" + minutos).substr(-2),
            ("0" + segundos).substr(-2)
        ].join(":");
        document.getElementById("res-hora").value = resultado;
    });
});
