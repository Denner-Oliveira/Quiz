// - Variáveis - //
const quizz = document.querySelector('#quizz-container')
const numQuestão = document.querySelector('#question-number')
const valorQuestao = Number(document.querySelector('#question-number').textContent)
const textoQuestao = document.querySelector('#question-text')
const botoes = [...document.querySelectorAll('#answers-box button')]
const final = document.querySelector('.resultado')
const txtAcertos = document.querySelector('#txtAcertos')
const porAcertos = document.querySelector('#porAcertos')
const usuario = document.querySelector('#paraUsuario')
const botao = document.querySelector('#botao')

// - Perguntas - //
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

// - Listener para o botão de início - //
botao.addEventListener('click',init)

// - Variáveis necessárias para funções - //
let rodada;
let acertos;

// - Função de início (zera as variáveis do jogo) - //
function init(){
  botao.classList.toggle('hide');
  quizz.classList.toggle('hide');
  final.classList.add('hide')
  rodada = 0;
  acertos = 0;
  numQuestão.textContent = 0;
  questaoDaVez(rodada);
}

// - Verifica as perguntas para chamar o Array com perguntas e respostas - //
function questaoDaVez(num){
  numQuestão.textContent++
  textoQuestao.textContent = perguntas[num].question;
  botoes.forEach(element=>{ 
    let indice = botoes.indexOf(element);
    element.childNodes[2].textContent = perguntas[num].answers[indice].answer
  })
  respostas();
}

// - Funcção para escrever a pergunta e as alternativas - //
function respostas(){
  botoes.forEach(a=> a.addEventListener('click',verificaResposta))
}

// - Função que verifica a resposta dada pelo usuário (adiciona classes caso certo ou errado)- //
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
    this.classList.add('wrong-answer')
    rodada++;
    setTimeout(()=>{
      this.classList.remove('wrong-answer')
      if(rodada == 3){
        resultado()
      }else{
        questaoDaVez(rodada)
      }
    },800)
  }
}

//- Função que trroca o valor do display da div do quiz e do resultado - //
function resultado(){
  quizz.classList.toggle('hide');
  final.classList.toggle('hide');
  verificaAcertos(acertos)
}

// - Função que calcula a quantidade de acertos e imprime o valor - //
function verificaAcertos(x){
  let result = ((x * 100) / perguntas.length).toFixed(2)
  if(x >= 2){
    usuario.textContent = 'PARABÉNS!'
  }else{
    usuario.textContent = 'Podemos melhorar!'
  }
  txtAcertos.textContent = `De ${perguntas.length} perguntas você acertou ${x}`
  porAcertos.textContent = `${result}%`
  setTimeout(()=>{
    botao.textContent = 'Recomeçar!'
    botao.classList.remove('hide')
  },1500)
}


