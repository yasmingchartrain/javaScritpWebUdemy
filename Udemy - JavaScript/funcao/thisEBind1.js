const pessoa = {
    saudacao : 'ola,bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar()
//falar() //conflito entre paradgmas :funcional e orientado a Objeto (OO)

//solução seria
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()
