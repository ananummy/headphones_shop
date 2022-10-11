// добавление карточек продуктов
import {headphones, wirelessHeadphones} from './stuff.js' 


function addCardsForFirstPage() {
    const headphonesContainer = document.querySelector('.headphones-container')
    for (let i = 0; i < headphones.length; i++) {
        const headphonesBlock = document.createElement('div')
        const infoContainer = document.createElement('div')
        const headphonesImg =  document.createElement('img')
        const name = document.createElement('p')
        const cost = document.createElement('p')
        const rate = document.createElement('div')
        const star = document.createElement('img')
        const ratePos = document.createElement('p')
        const buy = document.createElement('button')
    
        headphonesContainer.append(headphonesBlock)
        headphonesBlock.classList.add("item")
        headphonesBlock.setAttribute('id', headphones[i].id)
    
        headphonesImg.src = headphones[i].img
        headphonesImg.classList.add("item_img")
        headphonesBlock.append(headphonesImg)
    
        infoContainer.classList.add("info")
        headphonesBlock.append(infoContainer)
        infoContainer.setAttribute('id', headphones[i].id)
    
        infoContainer.append(name)
        name.classList.add("item_title")
        name.textContent = headphones[i].title
    
        infoContainer.append(cost)
        cost.classList.add("item_price")
        cost.textContent = `${headphones[i].price} ₽`
    
        star.src = "/assets/svg/VectorRate.svg"
        infoContainer.append(rate)
        rate.classList.add("item_rate")
        rate.append(star)
        rate.append(ratePos)
        ratePos.textContent = headphones[i].rate  
        
        infoContainer.append(buy)
        buy.classList.add("item_button")
        buy.textContent = 'Купить'
        buy.setAttribute('id', headphones[i].id)
    }

    const wirelessHeadphonesContainer = document.querySelector('.wirelessHeadphones-container')
    for (let j = 0; j < wirelessHeadphones.length; j++) {
        const wirelessHeadphonesBlock = document.createElement('div')
        const wirelessHeadphonesImg =  document.createElement('img')
        const infoContainer = document.createElement('div')
        const buy = document.createElement('button')
        const name = document.createElement('p')
        const cost = document.createElement('p')
        const rate = document.createElement('div')
        const star = document.createElement('img')
        const ratePos = document.createElement('p')

        wirelessHeadphonesContainer.append(wirelessHeadphonesBlock)
        wirelessHeadphonesBlock.classList.add("item")
        wirelessHeadphonesBlock.setAttribute('id', wirelessHeadphones[j].id)

        wirelessHeadphonesImg.src = wirelessHeadphones[j].img
        wirelessHeadphonesImg.classList.add("item_img")
        wirelessHeadphonesBlock.append(wirelessHeadphonesImg)

        infoContainer.classList.add("info")
        wirelessHeadphonesBlock.append(infoContainer)
        infoContainer.setAttribute('id', wirelessHeadphones[j].id)

        infoContainer.append(name)
        name.classList.add("item_title")
        name.textContent = wirelessHeadphones[j].title

        infoContainer.append(cost)
        cost.classList.add("item_price")
        cost.textContent = `${wirelessHeadphones[j].price} ₽`

        star.src = "/assets/svg/VectorRate.svg"
        infoContainer.append(rate)
        rate.classList.add("item_rate")
        rate.append(star)
        rate.append(ratePos)
        ratePos.textContent = wirelessHeadphones[j].rate

        infoContainer.append(buy)
        buy.classList.add("item_button")
        buy.textContent = 'Купить'
        buy.setAttribute('id', wirelessHeadphones[j].id)
    }
}

addCardsForFirstPage()

// увеличение количества товаров в корзине
const buyBtns = document.querySelectorAll('.item_button')
const buyCount = document.querySelector('.basket-item_count')
buyCount.classList.add("none")
let shoppingList = []
function addToBasket() {
    shoppingList.push(this.id)
    localStorage.setItem('id', JSON.stringify(shoppingList))
    if (JSON.parse(localStorage.getItem('id')).length >= 1) {
        buyCount.classList.remove("none")
        buyCount.textContent = `${JSON.parse(localStorage.getItem('id')).length}`
    }
} 
buyBtns.forEach(element => {
    element.addEventListener('click', addToBasket)
})







