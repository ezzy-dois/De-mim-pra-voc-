let count = 1
document.getElementById("radio1").checked = true;

setInterval(function(){
    nextImage()
}, 3000)

function nextImage(){
    count++;
    if(count>7){
        count = 1;
    }

    document.getElementById("radio" + count).checked = true;
}

function mostrarDiferenca(dataInicio, elementoId) {

    const inicio = new Date(dataInicio);

    function atualizar() {

        const agora = new Date();

        let anos = agora.getFullYear() - inicio.getFullYear();
        let meses = agora.getMonth() - inicio.getMonth();
        let dias = agora.getDate() - inicio.getDate();
        let horas = agora.getHours() - inicio.getHours();
        let minutos = agora.getMinutes() - inicio.getMinutes();
        let segundos = agora.getSeconds() - inicio.getSeconds();

        if (segundos < 0) {
            segundos += 60;
            minutos--;
        }

        if (minutos < 0) {
            minutos += 60;
            horas--;
        }

        if (horas < 0) {
            horas += 24;
            dias--;
        }

        if (dias < 0) {
            const ultimoDiaMesAnterior = new Date(
                agora.getFullYear(),
                agora.getMonth(),
                0
            ).getDate();

            dias += ultimoDiaMesAnterior;
            meses--;
        }

        if (meses < 0) {
            meses += 12;
            anos--;
        }

        const texto =
            `${anos > 0 ? `${anos} ano${anos > 1 ? 's,' : ','}` : ''} ` +
            `${meses > 0 ? `${meses} mês${meses > 1 ? 'es,' : ','}` : ''} ` +
            `${dias > 0 ? `${dias} dia${dias > 1 ? 's,' : ','}` : ''} ` +
            `${horas} hr${horas > 1 ? 's,' : ','} ` +
            `${minutos} min, ` +
            `${segundos} s`;

        document.getElementById(elementoId).textContent = texto;
    }

    atualizar();
    setInterval(atualizar, 1000);
}

document.addEventListener("DOMContentLoaded", () => {
    mostrarDiferenca("2025-12-12 16:00", "tempo");
});

