import React from 'react';
import './App.css';

let questions = [
    {title: "Тбилиси - столица Грузии?", 
    variants: ["Да", "Нет", "Это кто?"],
    correct: 0,}, // 1

    {title: "Для чего нужна микроволновка?",
    variants: ["Вертеть еду", "Гудит прикольно", "Разогревать еду"],
    correct: 2,}, // 2

    {title: "Какого цвета трава?",
    variants: ["Красная", "Зеленая", "Розовая"],
    correct: 1,}, // 3

    {title: "Название года, в котором 366 дней?",
    variants: ["Растянутый", "Високосный", "Высокий"],
    correct: 1,}, // 4

    {title: "Каким напитком является пиво?", 
    variants: ["Кайфовым", "Неприятным", "Алкогольным"],
    correct: 2,}, // 5

    {title: "Мой брат - клоун?", 
    variants: ["Нет.", "Конечно", "Я его не знаю"],
    correct: 1,}, // 6 

    {title: "Хлеб - ... ?", 
    variants: ["Всему голова", "Хлебобулочное изделие", "Напиток"],
    correct: 0,}, // 7

    {title: "Что надо сделать при виде казино?", 
    variants: ["Пройти мимо", "Оформить додеп", "Джон Уик"],
    correct: 1,}, // 8

    {title: "Какой чай я пью, пока это пишу?", 
    variants: ["Черный", "Зеленый", "Вода"],
    correct: 0,}, // 9

    {title: "Какой это вопрос по счету?", 
    variants: ["8", "9", "10"],
    correct: 2,}, // 10
]

function Result({correctAnswers}) {
  return (
    <div className="result">
      <img src="okak.png" alt="Result" />
      <h2>Вы ответили на {correctAnswers} вопроса из {questions.length}</h2>
      <a href='/'>
        <button>Попробовать снова</button>
      </a>
    </div>
  );
}

function Game( {step, question, clickVariant}) {
  const  percentageProgressBar = Math.round((step / questions.length) * 100)


  return (
    <>
      <div className="progress">
        <div style={{ width: `${percentageProgressBar}%` }} className="progress__inner"></div>
      </div>
      <h1>
        {question.title}
      </h1>
      <ul>
          {
            question.variants.map((text, index) => (
              <li onClick={() => clickVariant(index)} key={text}>{text}</li>
            ))
          }
      </ul>
    </>
  );
}

function App() {
  let [step, setStep] = React.useState(0);
  let question = questions[step];
  let [correctAnswers, setCorrectAnswers] = React.useState(0);

  const clickVariant= (index) => {
    setStep(step + 1)

    if(index === question.correct){
      setCorrectAnswers(correctAnswers + 1)
    }
  }
  return (
    <div className="App">
      {
        step !== questions.length ? (<Game step = {step} question = {question} clickVariant={clickVariant}/> 
        ) : (
          <Result correctAnswers= {correctAnswers}/>)
       }
    </div>
  );
}

export default App;