document.addEventListener('DOMContentLoaded', (evento) => {
    /* Almacenamos los elementos más usados del DOM */
    let ini_fecha = document.getElementById('ini-fecha');
    let ini_hora = document.getElementById('ini-hora');
    let fin_fecha = document.getElementById('fin-fecha');
    let fin_hora = document.getElementById('fin-hora');
    let calcular = document.getElementById('calcular');
    let actual = document.getElementById('actual');
    /* Agregamos la función de reinicio de valores a la hora actual cuando pulsemos el botón */
    actual.addEventListener('click', (evento) => {
        /* Obtenemos la fecha actual y calculamos fecha y hora */
        let ahora = new Date();
        let fecha = ahora.toISOString().substring(0, 10);
        let hora = ahora.toISOString().substring(11, 19);
        /* Cargamos los valores iniciales de los campos */
        ini_fecha.value = fecha;
        ini_hora.value = hora;
        fin_fecha.value = fecha;
        fin_hora.value = hora;
    });
    /* Al cargar la página realizamos un clic inicial */
    actual.click();
    /* Agregamos la función de cálculo cuando pulsemos el botón */
    calcular.addEventListener('click', (evento) => {
        console.log('Evento');
    });
});
