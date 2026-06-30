const formulario = document.getElementById("formCarta");
const mensagem = document.getElementById("mensagem");

formulario.addEventListener("submit", function(event){
    event.preventDefault();
    mensagem.style.display = "block";
    mensagem.innerHTML =
    "🌸 Sua solicitação foi enviada com sucesso! Em breve começaremos a transformar sua história em uma carta inesquecível.";
    formulario.reset();
});