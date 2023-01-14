let quizz = document.querySelector('#quizz-container')
let numQuestão = document.querySelector('#question-number')
let valorQuestao = Number(document.querySelector('#question-number').textContent)
let textoQuestao = document.querySelector('#question-text')
let botoes = [...document.querySelectorAll('#answers-box button')]
let final = document.querySelector('#resultado')
let txtAcertos = document.querySelector('#txtAcertos')
let porAcertos = document.querySelector('#porAcertos')
let usuario = document.querySelector('#paraUsuario')

let perguntas = [
    {
        "question": "PHP foi desenvolvido para qual fim?",
        "answers": [
          {
            "answer": "back-end",
            "correct": true
          },
          {
            "answer": "front-end",
            "correct": false
          },
          {
            "answer": "Sistema operacional",
            "correct": false
          },
          {
            "answer": "Banco de dados",
            "correct": false
          },
        ]
      },
      {
        "question": "Uma forma de declarar variável em JavaScript:",
        "answers": [
          {
            "answer": "$var",
            "correct": false
          },
          {
            "answer": "var",
            "correct": true
          },
          {
            "answer": "@var",
            "correct": false
          },
          {
            "answer": "#let",
            "correct": false
          },
        ]
      },
      {
        "question": "Qual o seletor de id no CSS?",
        "answers": [
          {
            "answer": "#",
            "correct": true
          },
          {
            "answer": ".",
            "correct": false
          },
          {
            "answer": "@",
            "correct": false
          },
          {
            "answer": "/",
            "correct": false
          },
        ]
      },
]

let num;
let rodada;
let acertos = 0

function init(){
  num = 0
  rodada = num;
  questaoDaVez(num);
}

function questaoDaVez(rodada){
  numQuestão.textContent++
  textoQuestao.textContent = perguntas[rodada].question;
  botoes.forEach(element=>{ 
    let indice = botoes.indexOf(element);
    element.childNodes[2].textContent = perguntas[rodada].answers[indice].answer
  })
  respostas();
}

function respostas(){
  botoes.forEach(a=> a.addEventListener('click',verificaResposta))
}

function verificaResposta(){  
  let indice = botoes.indexOf(this);
  if(perguntas[rodada].answers[indice].correct == true){
    botoes.forEach(element => element.classList.add('wrong-answer'))
    botoes[indice].classList.add('correct-answer')
    rodada++;
    setTimeout(()=>{
      botoes.forEach(element=> element.classList.remove('wrong-answer','correct-answer'))
      if(rodada == 3){
        acertos++
        resultado()
      }else{
        acertos++
        questaoDaVez(rodada)
      } 
    },800)
  }else{
    botoes.forEach(element => element.classList.add('wrong-answer'))
    rodada++;
    setTimeout(()=>{
      botoes.forEach(element=> element.classList.remove('wrong-answer'))
      if(rodada == 3){
        resultado()
      }else{
        questaoDaVez(rodada)
      }
    },800)
  }
}

function resultado(){
  quizz.classList.add('hide');
  final.classList.remove('hide');
  verificaAcertos(acertos)

}

function verificaAcertos(x){
  let por = x * 100
  let result = por / perguntas.length
  
  if(x >= 2){
    usuario.textContent = 'PARABÉNS!'
  }else{
    usuario.textContent = 'Podemos melhorar!'
  }
  txtAcertos.textContent = `De ${perguntas.length} perguntas você acertou ${x}`
  porAcertos.textContent = `${result.toFixed(2)}%`

}

init()
