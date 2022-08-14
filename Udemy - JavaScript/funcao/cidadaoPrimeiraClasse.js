//Função em JS é Fist Class Object ( citizens)
//  Higher-order function

//criar de forma literal
function fun1(){

}

//armazenar em uma variável
const fun2 = function (){}

// armazenar em um array
const array = [function(a,b) { return a + b}, fun1, fun2]
console.log(array[0](2,3))

//armazenar em um atributo de objeto
const obj = {}
obj.falar = function () {return 'Opa'}
console.log(obj.falar())

//passar uma função como parametro de uma função
function run (fun) {
    fun()
}
run(function () {console.log('Executando...')})

// uma função pode retorna/conter uma outra função
function soma (a,b) {
   return function (c){
   console.log(a+b+c) }
}
soma(2,3)(4)
//ou podemos fazer também

const cincoMais = soma(2,3)
cincoMais(4)