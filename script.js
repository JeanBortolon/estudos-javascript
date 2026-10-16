// =============================================================================
// ESTUDOS DE JAVASCRIPT
// Cada seção abaixo corresponde a um tópico de notes.md.
// Para ver os resultados: abra index.html no navegador e use F12 > Console.
// =============================================================================


// =============================================================================
// 1. PRIMEIROS PASSOS
// =============================================================================

// console.log escreve no console do navegador (DevTools), parecido com o print do Python
console.log("Hello, World!");


// =============================================================================
// 2. TIPOS DE DADOS PRIMITIVOS
// =============================================================================

// string: texto entre aspas simples ou duplas
let nome = "Jean";
console.log("Olá, " + nome + "!"); // "+" concatena strings

// number: inteiros e decimais usam o mesmo tipo
let idade = 31;
console.log("Você tem " + idade + " anos.");

// boolean: true ou false. Aqui vem do resultado de uma comparação
let eMaiorDeIdade = idade >= 18;
console.log("É maior de idade? " +eMaiorDeIdade);

// null: ausência de valor DEFINIDA PELO PROGRAMADOR
let endereco = null; // nasce vazio de propósito, para ser preenchido depois
console.log("Endereço: ", endereco);

// undefined: variável declarada, mas que ainda não recebeu nenhum valor
// Cuidado: fazer conta com undefined resulta em NaN (Not a Number)
let telefone;

// Dentro do if, undefined é tratado como false (falsy), então cai no else
if (telefone){
    console.log("Número do telefone: ", telefone)

} else {
    console.log("Telefone não foi preenchido:", typeof telefone) // typeof retorna "undefined"
}


// =============================================================================
// 3. COERÇÃO DE TIPOS (conversão de um tipo para outro)
// =============================================================================

// --- Coerção implícita: o JS converte sozinho, às vezes de forma surpreendente
let idadeStr = '31'
console.log(idadeStr * 2) // 62 -> a string '31' virou number para a multiplicação

// Truthy / Falsy: valores convertidos para boolean em um if/while/ternário
// Falsy (viram false): false, 0, "" (string vazia), null, undefined, NaN
// Truthy (viram true): todo o resto, inclusive "0", "false" e []
console.log("5" + 1); // "51" (string) -> o "+" com uma string concatena, não soma
console.log("5"- 1); // 4 (number) -> "-", "*" e "/" só existem para números, então converte
console.log("5"* 2); // 10 (number)
console.log("5"/ 2); // 2.5 (number)

// --- Coerção explícita: eu peço a conversão de forma clara
let numero = 1;
let numeroStr = String(numero); // number -> string

let stringNumero = '123';
let stringNumeroNumero = Number(stringNumero); // string -> number
let segundoNumero = Number("456");
segundoNumero = (10).toString(); // reatribuição: agora vira a string "10" (let permite trocar o tipo)

console.log(typeof numero, numero);                       // number 1
console.log(typeof numeroStr, numeroStr);                 // string 1
console.log(typeof stringNumero, stringNumero);           // string 123
console.log(typeof stringNumeroNumero, stringNumeroNumero); // number 123

// Conversão inválida: "Jean" não é um número, então o resultado é NaN
// Curiosidade: typeof NaN é "number", apesar do nome (Not a Number)
let stringInvalida = "Jean";
let stringInvalidaNumber = Number(stringInvalida);
console.log(typeof stringInvalida, stringInvalida);
console.log(typeof stringInvalidaNumber, stringInvalidaNumber);


// =============================================================================
// 4. VARIÁVEIS: let, const e var
// =============================================================================

// let: valor pode ser reatribuído (inclusive para outro tipo, o JS não impede)
let altura = 1.74;
altura = "minha altura é 1.74";
console.log(altura);

// const: não pode ser reatribuída (constante). Prefira const por padrão
// e use let apenas quando o valor realmente precisar mudar
const  pi = 3.14;
console.log(pi)
const horasDoDia = 24;
console.log(horasDoDia)

// var: forma antiga de declarar. Pode ser reatribuída como o let,
// mas tem escopo de FUNÇÃO (ignora blocos {}). Veja a explicação abaixo
var myVar = 'myVar'
console.log(myVar)

/* ESCOPO: onde uma variável "existe" e pode ser usada

   Escopo global: variável criada fora de qualquer função ou bloco.
   Fica disponível em qualquer lugar do código.

   Escopo de bloco: trecho delimitado por chaves {} (if, for, bloco isolado).
   Uma variável de bloco só existe dentro dessas chaves.

   var x let:
   - var (antigo): ignora o escopo de bloco. Criada dentro de um if, "vaza"
     para fora dele (fica visível na função inteira, ou global se estiver fora de função).
   - let (moderno): respeita o escopo de bloco. Nasce e morre dentro das chaves
     em que foi declarada, o que deixa o código mais previsível e seguro.
*/

let globalVar = "Estou no escopo global";

if (true) {
    var exemploVar = "Sou um var (ignoro o bloco)";
    let exemploLet = "Sou um let (respeito o bloco)";

    console.log(exemploLet); // funciona: estamos dentro do bloco onde ele foi declarado
}
console.log(exemploVar); // funciona: o var "vazou" do if
// console.log(exemploLet); // ERRO (ReferenceError): o let ficou preso dentro do if


// =============================================================================
// 5. OPERADORES
// =============================================================================

let count = 0;
count++; // incrementa 1  (count = 1)
count++; // incrementa 1  (count = 2)
count--; // decrementa 1  (count = 1)
console.log("count: ", count)

// == compara só o valor, convertendo os tipos (coerção): 1 == "1" é true
// === compara valor E tipo, sem conversão: 1 === "1" é false. Prefira sempre o ===
console.log("é igual?", 1 == "1")
console.log("é igual?", 1 === "1")
// Operador ternário: resolve um if-else em uma única linha
console.log("é igual?", 1 == "1" ? "igual":"diferente")

/* Sintaxe do ternário: condição ? valorSeVerdadeiro : valorSeFalso
   A linha acima equivale a:

   if (1 == "1"){
       console.log("igual")
   }
   else{
       console.log("diferente")
   } */


// =============================================================================
// 6. CONTROLE DE FLUXO: switch
// =============================================================================

// switch compara um valor com vários casos (case) e executa o que combinar.
// - break: encerra o switch. Sem ele, o JS continua executando os cases seguintes
// - default: roda quando nenhum case combina (equivale ao else)
let age = 25;

switch (age){
    case 18:
        console.log('Você tem 18 anos.');
        break;
    case 25:
        console.log('Você tem 25 anos.');
        break;
    case 30:
        console.log('Você tem 30 anos.');
        break;
    default:
        console.log('Idade não especificada');
}

// Exemplo mais realista: reagir ao status de um pagamento
let paymentStatus ="PAID"

switch (paymentStatus){
    case "PENDING":
        console.log('Pagamento Pendente.');
        break;
    case "PAID":
        console.log('Pagamento Concluído');
        break;
    case "FAILED":
        console.log('Pagamento Falhou');
        break;
    default:
        console.log('Pagamento não especificado');
}


// =============================================================================
// 7. ESTRUTURAS DE REPETIÇÃO
// =============================================================================

// --- for: ideal quando sei quantas vezes quero repetir. Tem 3 partes:
//   inicialização: let i = 0  -> variável de controle (contador)
//   condição:      i < 5      -> o loop continua enquanto for verdadeira
//   passo:         i++        -> executado ao final de cada volta
for (let i = 0; i < 5; i++){
    console.log(`Iteração ${i}`); // template string: `...${variável}...` insere o valor no texto
}

// --- while: repete enquanto a condição for verdadeira
// Atenção: é preciso alterar a variável dentro do loop (i++), senão vira loop infinito
// Obs.: este "let i" é global e independe do "i" do for acima, que existia só dentro do for
let i = 0;
while (i < 5){
    console.log("Executando loop", i);
    i++;
}


// =============================================================================
// 8. FUNÇÕES: bloco de código reutilizável
// =============================================================================

let idades = [18, 25, 32, 11, 9, 45];

// Uma função pode:
//   - retornar um valor com return
//   - não retornar nada (void). Nesse caso o resultado é undefined

// Percorre o array da posição 0 até o último índice (length - 1)
// e envia cada idade para a função verificaSeMaiorDeIdade
for (let i=0; i< idades.length; i++){
    let idade = idades[i]; // este "idade" (bloco) esconde o "idade" global declarado no início
    if(verificaSeMaiorDeIdade(idade)){
        console.log(`A idade ${idade} é maior de idade.`);
    }else{
        console.log(`A idade ${idade} é menor de idade.`);
    }
}

// Retorna true se a idade for 18 ou mais, e false caso contrário.
// Podemos chamá-la acima mesmo ela sendo declarada abaixo por causa do hoisting:
// o JS "sobe" as declarações de função (function nome(){}) para o topo antes de executar
function verificaSeMaiorDeIdade(idade){
    return idade >=18;
}


// =============================================================================
// 9. DOM (Document Object Model)
// =============================================================================

// O DOM é a representação da página HTML como uma árvore de objetos.
// É por ele que o JavaScript lê e altera a página no navegador.
// O navegador entrega essa árvore pronta através do objeto global "document".
// (O DOM só existe no navegador, não no Node.js.)

// --- Selecionando elementos ---

// querySelector usa seletores CSS: '#id', '.classe' ou 'tag'. Retorna o PRIMEIRO que combinar
let divContainer = document.querySelector('#div1');
// Alterando o estilo em linha do elemento (aqui o fundo fica amarelo)
divContainer.style.backgroundColor = 'yellow';


// --- Criando elementos ---

// 1) cria o elemento na memória (ainda não aparece na página)
let h3Element = document.createElement('h3');
// 2) define o texto dele
h3Element.textContent = ' teste de h3';
// 3) anexa ao final da div: só agora ele aparece na página
divContainer.appendChild(h3Element);

// O body também é um elemento: aqui o fundo da página inteira muda para azul claro
document.body.style.backgroundColor = 'lightblue';

// getElementsByTagName retorna uma coleção (HTMLCollection) com TODOS os elementos
// da tag, já que pode haver vários <h1>. [0] escolhe o primeiro pelo índice
let h1Element = document.getElementsByTagName('h1')[0];
console.log(h1Element) // mostra o elemento: <h1>Hello World !</h1>

// Alterando um atributo HTML: a classe da div passa de "classe1" para "classe2"
divContainer.setAttribute('class','classe2');

// Lendo o valor de um <input>.
// Aqui retorna "" (vazio), pois o código roda assim que a página carrega,
// antes de o usuário digitar. Para ler o que foi digitado, é preciso usar um evento
let inputElement = document.querySelector('#input1');
console.log(inputElement.value);
// Referência: W3Schools > JavaScript HTML DOM


// --- Eventos (addEventListener) ---

// Função que será chamada pelo clique do botão.
// Só seria usada se o HTML tivesse onclick="buttonClicked()" (hoje comentado no index.html)
function buttonClicked(){
    alert('Button was clicked!');
}

// Busca o botão pelo id para conectar um evento a ele
let button = document.querySelector('#button1');

// addEventListener(tipoDoEvento, funçãoQueSeráChamada)
// Aqui passamos uma função anônima (sem nome), escrita direto no argumento
button.addEventListener('click', function(){
    alert('Botão clicado!');
});

// Função com nome, para ser reaproveitada como "ouvinte" de evento
function showMessage(){
    console.log('Button clicked!');
    alert('Button clicked!');
}
// Passamos só o nome da função, SEM parênteses: showMessage e não showMessage().
// Com parênteses, ela seria executada na hora e não no clique.
// Obs.: um mesmo evento aceita vários ouvintes, então um clique dispara os dois alerts
button.addEventListener('click', showMessage);


/*
ONDE COLOCAR O <script> NO HTML

Se a tag <script> ficar no FIM do <body> (como no index.html), o JS roda depois
de os elementos existirem, e consegue manipulá-los normalmente.

Se ficar no <head>, o JS roda ANTES de o body ser criado e os querySelector
retornariam null. Nesse caso é preciso esperar a página carregar com o evento
DOMContentLoaded (ou usar o atributo defer na tag <script>):

document.addEventListener('DOMContentLoaded',function(){
    const button=document.getElementById('button1');
    button.addEventListener('click', function(){
        alert('Botão clicado!');
    });
});

*/


// =============================================================================
// 10. ARRAYS E OBJETOS
// =============================================================================

// --- ARRAYS: lista ordenada de valores, guardados em uma única variável ---
// Os índices começam em 0. A propriedade length informa o tamanho
let listaNomes = ['Ana', 'Bia', 'Carlos', 'Daniel'];
console.log(listaNomes)
console.log(listaNomes.length) // 4
console.log(listaNomes[0]) // 'Ana' -> acesso pelo índice

// push adiciona um valor no FINAL da lista (altera a lista original)
listaNomes.push("Jean");
console.log(listaNomes)

// Atribuir a um índice substitui o valor naquela posição
listaNomes[0] = 'Lucas' // 'Ana' foi trocada por 'Lucas'
console.log(listaNomes)

// Arrays em JS são dinâmicos: crescem e diminuem, não têm tamanho fixo

// pop remove o ÚLTIMO elemento e o retorna ('Jean')
let removido = listaNomes.pop()
console.log(removido)

// filter cria uma NOVA lista só com os elementos que passam no teste (a original não muda)
// Aqui: nomes que começam com "C" -> ['Carlos']
// "nome => ..." é uma arrow function, forma curta de escrever uma função
console.log(listaNomes.filter(nome => nome.startsWith("C")))

// A mesma ideia escrita com uma função tradicional
// (o nome da função diz "F", mas o teste é por "B": nome inconsistente que vale corrigir)
function filtraPorF(nome){
    if(nome.startsWith("B")){
        return true;
    } else{
        return false;
    }
}

// Passamos a função (sem parênteses) para o filter chamá-la a cada elemento -> ['Bia']
let listaNova = listaNomes.filter(filtraPorF)
console.log(listaNova)

// map percorre a lista, transforma cada elemento e devolve uma NOVA lista
// Aqui: todos os nomes em maiúsculas
let listaMaiuscula = listaNomes.map(nome => nome.toUpperCase());
console.log(listaMaiuscula)

// forEach percorre a lista executando uma ação por elemento, mas NÃO devolve lista nova.
// Serve para efeitos colaterais (como imprimir). O retorno dele é sempre undefined
let listaNova2 = listaNomes.forEach(nome => console.log(nome));
console.log(listaNova2); // undefined

// sort ordena em ordem alfabética ALTERANDO a lista original
// (newList e listaNomes apontam para o mesmo array)
let newList = listaNomes.sort()
console.log(newList)


// --- OBJETOS: coleção de pares chave: valor ---
// Servem para representar uma "coisa" com várias características
const pessoa = {
    nome:'Jean',
    idade:31,
    profissao:'Dev',
    possuiFaculdade: true,
    irmaos: ['Ana', 'Pedro', 'Mariana'], // o valor de uma chave pode ser até outro array
}

console.log(pessoa.nome) // acessa o valor pela chave -> 'Jean'
// Mesmo sendo const, o CONTEÚDO do objeto pode mudar (o que não pode é reatribuir a variável)
pessoa.nome = 'Maria'
console.log(pessoa.nome) // 'Maria'
console.log(pessoa.irmaos) // imprime o array inteiro
console.log(pessoa.irmaos[1]) // 'Pedro' -> índice 1 do array dentro do objeto

// Objeto que contém uma lista de outros objetos
const pessoa2 = {
    nome:'Jean',
    idade:31,
    profissao:'Dev',
    possuiFaculdade: true,
    irmaos:[
        {
            nome: 'Maria',
            idade: 25,
            profissao: 'Designer',
            possuiFaculdade: false },
        {
            nome: 'Pedro',
            idade: 20,
            profissao: 'Estudante',
            possuiFaculdade: false
        },
    ]
    }

console.log(pessoa2)
// Lendo da esquerda para a direita: objeto pessoa2 -> chave irmaos (array)
// -> índice 0 (objeto da Maria) -> chave nome  => 'Maria'
console.log(pessoa2.irmaos[0].nome)


// =============================================================================
// 11. ITERANDO SOBRE ARRAYS E OBJETOS
// =============================================================================

let frutas = ['Banana', 'Maçã', 'Uva']

// for clássico: length é 3, então os índices válidos são 0, 1 e 2
for (let i = 0; i<frutas.length; i++){
    console.log(frutas[i])
    }

// for...of: percorre direto os VALORES de um iterável (array, string, etc.),
// sem precisar de índice
for (const fruta of frutas){
    console.log(fruta)
}

/* Isto daria erro (TypeError): objeto comum não é iterável.
for (const attr of pessoa){
    console.log(attr)
} */

// Solução 1: Object.keys devolve um array com as CHAVES do objeto
for (const attr of Object.keys(pessoa)){
    console.log(pessoa[attr]) // pessoa[chave] acessa o valor usando a chave guardada na variável
    console.log(attr)
}

// Solução 2: Object.values devolve um array com os VALORES
// (aqui não temos acesso às chaves, só aos valores)
for (const attr of Object.values(pessoa)){
    console.log(attr)
}

// Solução 3: Object.entries devolve um array de pares [chave, valor]
// Usamos desestruturação para separar o par em duas variáveis
for (const [key,value] of Object.entries(pessoa)){
    console.log(key,value)
}

// Mesma coisa, mas guardando o par inteiro em uma variável e acessando por índice
for (const par of Object.entries(pessoa)){
    console.log(par[0],par[1]) // par[0] = chave, par[1] = valor
}
