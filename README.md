# Cálculo de Média de Notas de Atletas

Este projeto em JavaScript tem como objetivo calcular a média válida das notas de atletas em uma competição.
Cada atleta recebe cinco notas de avaliação e a média é calculada desconsiderando a maior e a menor nota.


**Estrutura dos Dados**

A entrada é uma matriz de objetos.


**Lógica da Aplicação**

A função mediasAtleta(atletas):

+ Percorre todos os atletas com um laço *for*;

+ Cria uma cópia das notas usando *slice()*, para não alterar o array original;

+ Ordena as notas em ordem crescente;

+ Remove a menor e a maior nota com *slice(1, length - 1)*;

+ Calcula a média usando *forEach()* dividindo pelo número de notas restantes;

+ Exibe os resultados no console.


**Como Executar**

Execute o arquivo *notas-atletas.js* no terminal usando Node.js da seguinte forma:

+ node notas-atletas.js;

+ O resultado será exibido no console.


# Conceitos Utilizados

+ Laços de repetição (for, forEach)

+ Seleção e ordenação de elementos (slice, sort)

+ Cálculo de média

+ Template strings (interpolação com crases)


# Autor

**Hugo Souza**
Projeto de certificação 1 desenvolvido como exercício prático na Trilha 1 - Lógica de Programação, com foco em manipulação de arrays e cálculo de médias.