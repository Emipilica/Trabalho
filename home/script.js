const formulario = document.getElementById("formCarta");
const mensagem = document.getElementById("mensagem");

formulario.addEventListener("submit", function(event){
    event.preventDefault();
    mensagem.style.display = "block";
    mensagem.innerHTML =
"✉ Solicitação enviada com sucesso!<br><br>Obrigado por confiar sua história à Cartas & Memórias. Em breve nossa equipe entrará em contato para iniciar a escrita da sua carta.";
    formulario.reset();
});
