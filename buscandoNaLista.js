let tenista=["Federer", "Nadal","Djokovic","Guga"];
//N° de Semanas está na ordem exata aos tenistas
let semanasN1=[310,209,332,43];
let arrayMulti=[tenista,semanasN1];

const exibeSemana=(nomeTenista)=>{
    if(arrayMulti[0].includes(nomeTenista)){
        //indexOf retorno o indice em que se encontra o tenista
      let x= arrayMulti[0].indexOf(nomeTenista)
      return `O tenista ${arrayMulti[0][x]} ficou ${arrayMulti[1][x]} semanas na liderança do Ranking`
    }else return "Tenista não encontrado"
}
console.log(exibeSemana("Federer"));
console.log(exibeSemana("Djokovic"));
console.log(exibeSemana("Nadal"));
console.log(exibeSemana("Guga"));
console.log(exibeSemana("teste"));