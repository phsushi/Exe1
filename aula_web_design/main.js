const nome = "Paulo"
const sobrenome = "Henrique"
const nomeCompleto = nome + " " + sobrenome
const idadeFinalDoAno = 19
const anoAtual = 2025
const subAnos = anoAtual - idadeFinalDoAno

console.log(`Nome completo: ${nomeCompleto}\n Ano que nasci: ${subAnos}`)


// Iniciando a aula 03

/*
const nomeInserindo = prompt("Digite seu nome: ")
console.log(`Seu nome é: ${nomeInserindo}`)
alert("Nome inserido com sucesso!")
*/

function conversorDeHorasParaSegundos(horario) {

    const separacaoHoras =new Array()
    
    if(separacaoHoras[0] == undefined){
        horasEmSegundos = 0
    }
    if(separacaoHoras[1] == undefined){
        minutosEmSegundos = 0
    }
    if(separacaoHoras[2] == undefined){
        segundos = 0
    }

    horas = parseInt(separacaoHoras[0])
    horasEmSegundos = horas * 3600

    minutos = parseInt(separacaoHoras[1])
    minutosEmSegundos = minutos * 60

    segundos = parseInt(separacaoHoras[2])
    totalEmSegundos = horasEmSegundos + minutosEmSegundos + segundos

    return  separacaoHoras
    
}

horario = prompt("Digite um horário no seguinte formato '00:00:00': ")
tempo = conversorDeHorasParaSegundos(horario)
console.log(`Seu horário em segundos: ${tempo}`)

