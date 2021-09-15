/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var qualquer = [true, 2, 'Felipe', 2.4, {casa:'Vermelha'}]

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myFunction(qualquer){
    return qualquer;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(myFunction(qualquer)[1])

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function twoValues(x, y){ 
    return x[y]
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
    var myVar = [true, 'Casa', 4, {name:'Felie'}, function minhaCasa(){ return 'Minha casa'}]

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(twoValues(myVar,0))
console.log(twoValues(myVar,1))
console.log(twoValues(myVar,2))
console.log(twoValues(myVar,3))
console.log(twoValues(myVar,4))
/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/

function book(bookname){
    var allBooks = {
        'Saudades que do tempo que passou': {
            quantidadePaginas: 212,
            autor: 'Lazaro Suarez',
            editora: 'Alamo',
        },
        'O Homem que cantava feliz': {
            quantidadePaginas: 324,
            autor: 'Jean George',
            editora: 'Richards',
        },
        'Como andar de bicicleta for Dummies': {
            quantidadePaginas: 539,
            autor: 'Marcos Gean',
            editora: 'Bookeman',
        }
        } 
     return !bookname ? allBooks : allBooks[bookname]  
}


/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book())

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log(`O livro Saudades que do tempo que passou tem ${book('Saudades que do tempo que passou').quantidadePaginas} páginas!`)

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log(`O autor do livro Como andar de bicicleta for Dummies é ${book('Como andar de bicicleta for Dummies').autor}.`)


/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log(`O livro Como andar de bicicleta for Dummies foi publicado pela editora ${book('Como andar de bicicleta for Dummies').editora}.`)

