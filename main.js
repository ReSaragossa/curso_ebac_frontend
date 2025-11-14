const form = document.getElementById("form-valida");
const campoA = document.getElementById("campoA");
const campoB = document.getElementById("campoB");
const mensagem = document.getElementById("mensagem");

form.addEventListener("submit", function (e) {
    e.preventDefault(); // evita que recarregue a página

    const valorA = Number(campoA.value);
    const valorB = Number(campoB.value);

    if (valorB > valorA) {
        mensagem.textContent = "Formulário válido! O número B é maior que o número A.";
        mensagem.className = "mensagem ok";
        mensagem.style.display = "block";
    } else {
        mensagem.textContent = "Formulário inválido! O número B deve ser MAIOR que o número A.";
        mensagem.className = "mensagem erro";
        mensagem.style.display = "block";
    }
});
