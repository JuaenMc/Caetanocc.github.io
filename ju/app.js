
let allbton = document.querySelectorAll(".btn")

allbton.forEach(botao => {
    botao.addEventListener('click', () => {
        console.log(botao.id)

        validarCodigo(botao.id)
    })
});

function validarCodigo(btn) {
    var codigo = document.getElementById("codigo-input").value;
    let senha 
    let pagina

    if (btn == "btn0") { senha = '731128'; pagina = "index2.html" }
    if (btn == "btn1") { senha = '080702'; pagina = "index3.html" }
    if (btn == "btn2") { senha = '51'    ; pagina = "index4.html" }

    // Verifica se o código é numérico
    if (!isNaN(codigo) && codigo == senha ) {
      // Redireciona para outra página
      window.location.href = pagina;
    } else {
      alert("Código inválido. tente novamente! vc consegue");
    }
  }

  