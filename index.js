const form = document.getElementById('formTask');
const input = document.getElementById('inputTask');
const main = document.getElementById('container');
const deleteBtn = document.querySelectorAll('.delete');
const data = document.getElementById('data');

function createCard(acessKey) {
    const card = document.createElement('div')
    card.classList.add('card')
    main.appendChild(card);

    const text = document.createElement('p');
    text.innerHTML = input.value;
    card.appendChild(text);

    const divButtos = document.createElement("div");

    const check = document.createElement("button")
    check.classList.add('check');
    check.onclick = () => checkCard(acessKey);
    const delet = document.createElement("button")
    delet.classList.add('delete');
    delet.onclick = () => deleteCard(acessKey);

    const checkIcon = document.createElement("img");
    const deletIcon = document.createElement("img");

    checkIcon.src = './assets/icons/check.svg'
    deletIcon.src = './assets/icons/delete.svg'

    check.appendChild(checkIcon);
    delet.appendChild(deletIcon);

    divButtos.appendChild(check);
    divButtos.appendChild(delet);

    card.accessKey = acessKey
    check.accessKey = acessKey
    delet.accessKey = acessKey
    card.appendChild(divButtos)
}

function deleteCard(acessKey) {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        if (acessKey === Number(card.accessKey)) {
            card.innerHTML = '';
            main.removeChild(card)
        }
    })
}

function checkCard(acessKey) {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        if (acessKey === Number(card.accessKey)) {
            card.classList.toggle('checked')
        }
    })
}

form.addEventListener('submit', e => {
    e.preventDefault();

    const findCards = document.querySelectorAll('.card');
    createCard(findCards.length++);

    input.value = '';
});


function AddData() {
    const nameMonths = ["Jan.", "Fev.", "Mar.", "Abr.", "Maio", "Jun.", "Jul.", "Ago.", "Set.", "Out.", "Nov.", "Dec."]

    const date = new Date().toLocaleDateString('pt-BR');

    const day = date.slice(0, 2)
    const createDayElement = document.createElement('h2');
    createDayElement.innerText = day;
    data.appendChild(createDayElement);

    const createDivYearAndMonth = document.createElement('div');
    data.appendChild(createDivYearAndMonth);

    const month = date.slice(6, 10)
    const createMonthElement = document.createElement('legend');
    createMonthElement.innerText = month;

    const year = nameMonths[date.slice(3, 5) - 1]
    const createYearElement = document.createElement('p');
    createYearElement.innerText = year;

    createDivYearAndMonth.appendChild(createYearElement)
    createDivYearAndMonth.appendChild(createMonthElement)
}


AddData();