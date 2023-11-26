function exibir (mensagem){
    console.log (mensagem)
}
exibir ("Hello World!")

function showName (name) {
    console.log(name)
}
showName ("Thiago Augusto")

let about = function (nameAbout, age, music){
    console.log(`Meu nome é ` + nameAbout)
    console.log(`Tenho ` + age + ` anos`)
    console.log(`E adoro ouvir ` + music)
}
 about ("Thiago",21,"Rock")

 let taste = function (movie, musicTaste){
    console.log(`Gosto de filmes como ` + movie)
    console.log(`Adoro ouvir músicas como ` + musicTaste)
}
 taste ("Matrix","Def Leppard - Photograph")

 function triple (number){
    return number *3
 }
 console.log (triple(16))

function verify (number1, number2 ){
    if (number1 >= number2){
console.log (`${number1} é maior que ${number2}`)
}else{
    console.log (`${number1} é menor que ${number2}`)
}
}
verify (5, 9)