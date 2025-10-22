let atletas = [
    {
        nome: "Cesar Abascal",
        notas: [10, 9.34, 8.42, 10, 7.88]
    },
    {
        nome: "Fernando Puntel",
        notas:  [8, 10, 10, 7, 9.33]
    },
    {
        nome: "Daiane Jelinsky",
        notas: [7, 10, 9.5, 9.5, 8]
    },
    {
        nome: "Bruno Castro",
        notas: [10, 10, 10, 9, 9.5]
    }
];

function mediasAtleta(atletas){
    for(let i = 0; i < atletas.length; i++){
        let atleta = atletas[i]
        
        //Ajusta as notas em ordem crescente
        let notasOrdenadas = atleta.notas.slice().sort((a, b) => a - b)
        
        //Exclui as menores e as maiores notas
        let excluirMenorEMaior = notasOrdenadas.slice(1, notasOrdenadas.length -1)

        //Calcula a média das notas que restaram
        let media = 0
        excluirMenorEMaior.forEach(function(nota){
            media += nota / excluirMenorEMaior.length
        })

        //Apresentação dos resultados ao usuário
        console.log(`Atleta: ${atleta.nome}`)
        console.log(`Notas Obtidas: ${atleta.notas}`)
        console.log(`Média Válida: ${media}`)
        
    }

}
mediasAtleta(atletas)


