# Estudos de JavaScript

Projeto de estudo com os fundamentos de JavaScript, praticados em uma página HTML simples. O código está todo comentado para servir de material de consulta.

## Arquivos

| Arquivo | Para que serve |
|---|---|
| `index.html` | Página com os elementos (input, div, botão) que o JS manipula |
| `script.js` | Todo o código de estudo, organizado em seções numeradas |
| `style.css` | Exemplos de seletores CSS (tag, id, classe). **Ainda não está ligado ao HTML** |
| `notes.md` | Roteiro de tópicos do curso, com os itens já estudados e os pendentes |

## Como rodar

1. Abra o `index.html` no navegador (duplo clique, ou "Open with Live Server" no VS Code).
2. Aperte **F12** e abra a aba **Console** para ver os `console.log`.
3. A página também mostra `alert` ao clicar no botão.

Não precisa instalar nada.

> **Dica:** edite o `script.js`, salve e dê F5 no navegador. Comente e descomente trechos para ver cada exemplo isolado.

## Mapa do `script.js`

| Seção | Assunto | O que observar |
|---|---|---|
| 1 | Primeiros passos | `console.log` |
| 2 | Tipos primitivos | string, number, boolean, `null`, `undefined` |
| 3 | Coerção de tipos | `"5" + 1` dá `"51"`, mas `"5" - 1` dá `4`; `Number("Jean")` dá `NaN` |
| 4 | `let`, `const`, `var` e escopo | `var` "vaza" do bloco, `let` não |
| 5 | Operadores | `==` vs `===`, operador ternário |
| 6 | `switch` | `break` e `default` |
| 7 | Repetição | `for` e `while` |
| 8 | Funções | `return`, hoisting |
| 9 | DOM | selecionar, criar elementos, atributos, eventos |
| 10 | Arrays e objetos | `push`, `pop`, `filter`, `map`, `forEach`, `sort`, chave-valor |
| 11 | Iteração | `for...of`, `Object.keys`, `Object.values`, `Object.entries` |

## Resumo dos conceitos

### Variáveis
- `const`: não pode ser reatribuída. Use como padrão.
- `let`: pode ser reatribuída, tem escopo de bloco `{}`.
- `var`: forma antiga, ignora blocos (escopo de função). Evite.

### Falsy e truthy
Valores **falsy** (viram `false` em um `if`): `false`, `0`, `""`, `null`, `undefined`, `NaN`. Todo o resto é truthy.

### `==` vs `===`
`==` converte os tipos antes de comparar (`1 == "1"` é `true`). `===` compara valor e tipo (`1 === "1"` é `false`). Prefira `===`.

### Métodos de array

| Método | Altera o array original? | Retorna |
|---|---|---|
| `push(x)` | Sim | Novo tamanho |
| `pop()` | Sim | O elemento removido |
| `filter(fn)` | Não | Novo array com os elementos que passaram no teste |
| `map(fn)` | Não | Novo array com cada elemento transformado |
| `forEach(fn)` | Não | `undefined` (só executa uma ação por elemento) |
| `sort()` | **Sim** | O mesmo array, ordenado |

### Iterar sobre objetos
Objeto comum não funciona com `for...of`. Use um destes:

```js
for (const chave of Object.keys(obj)) { ... }          // só as chaves
for (const valor of Object.values(obj)) { ... }        // só os valores
for (const [chave, valor] of Object.entries(obj)) { ... } // os dois
```

### DOM e eventos

```js
const botao = document.querySelector('#button1');   // seleciona por seletor CSS
botao.addEventListener('click', () => alert('oi')); // reage ao clique
```

- Passe a função **sem parênteses** ao `addEventListener` (`showMessage`, não `showMessage()`), senão ela roda na hora.
- O `<script>` fica no fim do `<body>` para que os elementos já existam quando o JS rodar.


## Referências

- [MDN Web Docs](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [W3Schools: JavaScript HTML DOM](https://www.w3schools.com/js/js_htmldom.asp)
- [javascript.info](https://javascript.info/)
