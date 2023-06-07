function VerificarNotificacao() {
    var idDesbravadorVar = sessionStorage.ID_DESBRAVADOR;
    var idClubeVar = sessionStorage.ID_CLUBE;
    if (idDesbravadorVar == 0) {
        fetch("/avisos/VerificarNotificacaoClube", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            idClubeServer: idClubeVar
        })
    }).then(function (resposta) {
        console.log("resposta: ", resposta);
        if (resposta.ok) {
            resposta.json().then(json => {
                console.log(json);
                console.log("TESTE: " + JSON.stringify(json));
                console.log(json[0].notificação)
                var notificação = json[0].notificação;
                if (notificação > 0) {
                    mensagem_notificacao.innerHTML = `<span>Você tem ${notificação} avisos!</span>`;
                    mensagem_notificacao.style.display = "block";
                } else {
                    mensagem_notificacao.style.display = "none";
                }
            });
        } else {
            throw ("Houve um erro ao tentar buscar os dados!");
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });
    return false;
    } else {
        fetch("/avisos/VerificarNotificacaoDesbravador", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            idDesbravadorServer: idDesbravadorVar
        })
    }).then(function (resposta) {
        console.log("resposta: ", resposta);
        if (resposta.ok) {
            resposta.json().then(json => {
                console.log(json);
                console.log("TESTE: " + JSON.stringify(json));
                console.log(json[0].notificação)
                var notificação = json[0].notificação;
                if (notificação > 0) {
                    mensagem_notificacao.innerHTML = `Você tem ${notificação} avisos!`;
                    mensagem_notificacao.style.display = "block";
                } else {
                    mensagem_notificacao.style.display = "none";
                }
            });
        } else {
            throw ("Houve um erro ao tentar buscar os dados!");
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });
    return false;
    }
}
setInterval(() => {
    // VerificarNotificacao();
}, 1000);