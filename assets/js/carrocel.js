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

function mostrarDiferenca(dataInicio, dataFim, elementoId) {
    function atualizar() {
        let inicio = new Date(dataInicio);
        let fim = dataFim ? new Date(dataFim) : new Date();

        if (fim < inicio) {
            [inicio, fim] = [fim, inicio];
        }

        let anos = fim.getFullYear() - inicio.getFullYear();
        let meses = fim.getMonth() - inicio.getMonth();
        let dias = fim.getDate() - inicio.getDate();
        let horas = fim.getHours() - inicio.getHours();
        let minutos = fim.getMinutes() - inicio.getMinutes();

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
                fim.getFullYear(),
                fim.getMonth(),
                0
            ).getDate();
            dias += ultimoDiaMesAnterior;
            meses--;
        }

        if (meses < 0) {
            meses += 12;
            anos--;
        }
        //${anos} ano${anos > 1 ? 's' : ''}
        const texto = 
            `${anos > 0 ? `${anos} ano${anos > 1 ? 's,' : ','}` : ''} ` +
            `${meses > 0 ? `${meses} mês${meses > 1 ? 'es,' : ','}` : ''} ` +
            `${dias > 0 ? `${dias} dia${dias > 1 ? 's,' : ','}` : ''} ` +
            `${horas} hr${horas > 1 ? 's,' : ','} ` +
            `${minutos} min `;

        document.getElementById(elementoId).textContent = texto;
    }

    atualizar();
    setInterval(atualizar, 60000); // atualiza a cada minuto
}

document.addEventListener("DOMContentLoaded", () => {
    mostrarDiferenca("2025-12-12 16:00", null, "tempo");
});

