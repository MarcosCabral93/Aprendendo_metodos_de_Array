let nomes = ["Lucas", "Rodolfo", "Diogo",
 "Amauri", "Josemar", "MP","Rafael"];
//1° parametro Posição Inicial/2° Parametro n° de elementos a alterar apos o 1° parametro, 3°parametro o que colocar no lugar 
 nomes.splice(3,2,"Mestre Jedai");
 console.log(nomes)
 nomes.splice(4,0,"FEDERER")
 console.log(nomes)
 nomes.splice(1,nomes.length)
 console.log(nomes)