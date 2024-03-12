// um exemplo de bubble sort:
// o bubble sort consciste em uma lista de itens com seus determinados valores, que podem ser colocados em uma ordem crescente, ou não, vamos lá pro exemplo:

const ValorCarros = [17329.71, 12234.82, 27183.92, 43718.17, 28192.63]; // neste array de exemplo, os valores não estam em ordens crescentes.

const tamanho = ValorCarros.length; // variável para obter o tamanho do array

// a ideia do bublle sort é fazer comparações até que todo o array esteja em ordem crescente.

// criamos 2 variáveis para estocar os valores:

var indiceAtual; // esta representa o indíce que está sendo comparado com os demais valores
var indicePosicao; // representa o índice que está percorrendo o vetor
var aux;

// para armazenar o valor da  posição atual, usaremos uma variável auxiliar:

// loop for para a troca
for (indiceAtual = 0; indiceAtual < tamanho - 1; indiceAtual++) {
  for (indicePosicao = 0; indicePosicao < tamanho - indiceAtual - 1; indicePosicao++) {
    if (ValorCarros[indicePosicao] > ValorCarros[indicePosicao + 1]) {
      aux = ValorCarros[indicePosicao];
      ValorCarros[indicePosicao] = ValorCarros[indicePosicao + 1];
      ValorCarros[indicePosicao + 1] = aux;
    }
  }
}

console.info(ValorCarros);

