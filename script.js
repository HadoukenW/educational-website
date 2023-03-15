function burgerMenu(){
    let burger = document.querySelector('.burger')
    let menu = document.querySelector('.menu')
    const body = document.querySelector('body')
    burger.addEventListener('click', () =>{
        if (!menu.classList.contains('active')) {
            menu.classList.add('active')
            burger.classList.add('active-burger')
            body.classList.add('locked')
        }
        else {
            menu.classList.remove('active')
            burger.classList.remove('active-burger')
            body.classList.remove('locked')
        }
    })

    // Вот тут мы ставим брейкпоинт навбара
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 767) {
            menu.classList.remove('active')
            burger.classList.remove('active-burger')
            body.classList.remove('locked')
        }
    })

}
burgerMenu()

// Вызываем эту функцию, если нам нужно зафиксировать меню при скролле.
function fixedNav() {
    const nav = document.querySelector('nav')

    // тут мы указываем в пикселях сколько нужно проскролить, чтобы наше меню стало фиксированным
    const breakpoint = 1
    if(window.scrollY >= breakpoint) {
        nav.classList.add('fixed__nav')
    }
    else {
        nav.classList.remove('fixed__nav')
    }
}

//getting uncommented if we need to execute this function
// window.addEventListener('scroll', fixedNav)


const quizData = [
    {
        question: "Что такое кибератака?",
        a: "Рассылка мошеннических сообщений",
        b: "Спам",
        c: "Контратака против антивирусов",
        d: "Получение контроля над важными документами и системами или их повреждение",
        correct: "d",
    },
    {
        question: "Сколько существует основных кибератак?",
        a: "2",
        b: "6",
        c: "8",
        d: "5",
        correct: "b",
    },
    {
        question: "Что по итогам расследований атакавалось больше всего?",
        a: "государственные предприятия",
        b: "Промышленный сектор",
        c: "IT-компании",
        d: "Финансовые, энергетические сектора",
        correct: "a",
    },
    {
        question: "Что чаще всего становится целью злоумышленников?",
        a: "Внутренние продукты",
        b: "Хищение данных",
        c: "Финансовые валюты",
        d: "Ничего из выше перечисленного",
        correct: "b",
    },

    {
        question: "Чего не стоит делать?",
        a: "Обновлять приложения на телефоне",
        b: "Использовать виртуальные карты",
        c: "Включать автозаполение",
        d: "Чистить историю браузера",
        correct: "c",
    },

    {
        question: "Что такое межсайтовый сценарий?",
        a: "Заход по незвестной ссылке раскрывая персональные данные",
        b: "Угроза уничтожить данные пользователя",
        c: "Дополнительный материал сайта",
        d: "Информация для разработчиков",
        correct: "a",
    },
    
];
const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
let currentQuiz = 0
let score = 0
loadQuiz()
function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }
       currentQuiz++
       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2 class="quiz__answered">Вы ответили на ${score}/${quizData.length} вопросов правильно</h2>
           <button onclick="location.reload()">Повторить</button>
           `
       }
    }
})
