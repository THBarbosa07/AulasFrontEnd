let games = ["Dark Souls", "The Legend Of Zelda", "Castlevania", "Skyrim", "Blazblue"]
games.unshift ("Call Of Duty")
games.pop ()
games.push ("Ace Attorney", "Super Smash Bros.")
games.shift ()
console.log(games)

let numbers = [10,7,5,6,3,8,9,2,1,4]
numbers.sort(function (a,b){
return a-b
})
console.log(numbers)

let aboutMe = {
    Nome: `Thiago`,
    Idade: 21,
    Estado: `RJ`
}
aboutMe.Música = (`Rock`)
delete aboutMe.Estado
console.log(aboutMe)

let cadastro = [
    {
        Nome: `Luana`,
        Idade: 20,
        Telefone: 19256843609,
        Amigos: [`Thiago`,`Maria`,`Ícaro`,`Kayo`]
    },
    {
        Nome: `João`,
        Idade: 20,
        Telefone: 21520614456,
        Amigos: [`Leone`,`Vitoria`,`Lucas`,`Jose`]
    },
    {
        Nome: `Bruno`,
        Idade: 26,
        Telefone: 19112765879,
        Amigos: [`Mauricio`,`Leandro`,`Flávio`,`Olivia`]
    },
    {
        Nome: `Diego`,
        Idade: 23,
        Telefone: 119008254392,
        Amigos: [`Eduarda`,`Ana`,`Caio`,`Leticia`]
    }
]
console.log(cadastro [0].Amigos[0])
console.log(cadastro [1].Amigos[0])
console.log(cadastro [2].Amigos[0])
console.log(cadastro [3].Amigos[0])