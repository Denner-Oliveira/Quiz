let quizz = document.querySelector('#quizz-container')
let numQuestão = document.querySelector('#question-number')
let valorQuestao = Number(document.querySelector('#question-number').textContent)
let textoQuestao = document.querySelector('#question-text')
let botoes = [...document.querySelectorAll('#answers-box button')]

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

function init(){
  num = 0
  questaoDaVez(num);
}

function questaoDaVez(rodada){
  numQuestão.textContent++
  textoQuestao.textContent = perguntas[rodada].question
  respostas(rodada);
}

function respostas(rodada){
  for(i=0;i<botoes.length;i++){
    botoes[i].childNodes[2].textContent = perguntas[rodada].answers[i].answer
  }
  verificaResposta(rodada)
}

function verificaResposta(rodada){
  for(i=0;i<botoes.length;i++){
    botoes[i].addEventListener('click',function a(){click(this)})
  }
} 

function resultado(){
  quizz.classList = 'hide'
}

function click(x){
  x.removeEventListener('click',function a(){click(this)})
  let indice = botoes.indexOf(x)
  //botoes.forEach(a => a.classList = 'wrong-answer');
  //botoes[indice].classList = 'correct-answer';
  if(num > 2){
    resultado();      
  }else{      
    //botoes.forEach(a=> a.classList.remove('correct-answer','wrong-answer'));    
    //num++;      )
    questaoDaVez(num);
  }
          /*
            x.classList = 'wrong-answer';
           s if(num > 2){
              resultado();
            }else{
            x.classList.remove('wrong-answer');
            num++;
            //questaoDaVez(num);
          */
          }

init()




/*
if(perguntas[rodada].answers[indice].correct == true){
    console.log('if')

else{
  console.log('else')
}
*/