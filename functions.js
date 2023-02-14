let count = document.getElementById("count");
let botao = document.getElementById("botao");

let contagem = 0;

const handleChangeCount = (e) => {
  contagem = e.target.value;
  console.log(contagem);
};

const clicou = () => {
  function contar() {
    if (contagem == 0) {
      console.log("Seu tempo acabou!! Tente novamente!!");
      clearTimeout(time);
    } else {
      contagem--;
      console.log(contagem);
      let cronometro = (document.getElementById("cronometro").innerHTML =
        contagem);
    }
  }
  const time = setInterval(contar, 1000);
};

botao.addEventListener("click", clicou);
count.addEventListener("change", handleChangeCount);
