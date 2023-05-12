const nota1Input = document.getElementById("nota1");
const nota2Input = document.getElementById("nota2");
const nota3Input = document.getElementById("nota3");

const botaoMedia = document.getElementById("calculaMedia");
const novoCalculo = document.getElementById("novoCalculo");


const notaMedia = document.getElementById("notaMedia");
const statusAluno = document.getElementById("statusAluno");

const notaExameFinal = document.getElementById("notaExameFinal");
const notaFinal = document.getElementById("notaFinal");
const statusFinal = document.getElementById("statusFinal");


function validarNotas() {
  const nota1 = parseFloat(nota1Input.value);
  const nota2 = parseFloat(nota2Input.value);
  const nota3 = parseFloat(nota3Input.value);

  if (
    nota1 <= 0 || nota1 > 100 ||
    nota2 <= 0 || nota2 > 100 ||
    nota3 <= 0 || nota3 > 100
  ) {
    alert("Insira numeros acima de 0 ou abaixo e igual a 100")
    return false;
  }
  return true
}

function calcularMedia() {

  if (validarNotas() == true) {
    const nota1 = parseFloat(nota1Input.value);
    const nota2 = parseFloat(nota2Input.value);
    const nota3 = parseFloat(nota3Input.value);

    const media = (nota1 + nota2 + nota3) / 3;

    notaMedia.textContent = "A média das notas é: " + media.toFixed(2);

    if (media <= 39.99) {
      statusAluno.textContent = 'reprovado direto'
      notaExameFinal.style.display = "none";

    }
    else if (media >= 40 && media <= 69.99) {
      statusAluno.textContent = 'Faça o exame final e coloque a nota para recalcular'
      notaExameFinal.style.display = "block";
      calcularNotaFinal(media)

    }
    else if (media >= 70) {
      statusAluno.textContent = 'Aprovado. Parabens! :)'
      notaExameFinal.style.display = "none";
    }
  }
}

function calcularNotaFinal(media) {

  const notaExame = parseFloat(notaExameFinal.value);

  if (notaExame == 0) {
    return;
  }
  else if (notaExame > 1) {
    const mediaFinal = (media + notaExame) / 2
    console.log(mediaFinal)


    if (mediaFinal >= 50) {
      statusFinal.style.display = "block";
      notaFinal.style.display = "block";
      notaFinal.textContent = "A média das notas é: " + mediaFinal.toFixed(2);
      statusFinal.textContent = 'Aprovado mas estude mais na proxima.'
    }
    else {
      statusFinal.style.display = "block";
      notaFinal.style.display = "block";
      notaFinal.textContent = "A média das notas é: " + mediaFinal.toFixed(2);
      statusFinal.textContent = 'reprovado direto, até ano que vem.'
    }
  }
}

function novoCalculoFunction() {
  window.location.reload();
}

novoCalculo.addEventListener("click", novoCalculoFunction);
botaoMedia.addEventListener("click", calcularMedia);