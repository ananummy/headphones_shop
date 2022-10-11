//const storage = JSON.parse(localStorage.getItem('id'))
import {headphones, wirelessHeadphones} from './stuff.js' 

const buyCount = document.querySelector('.basket-item_count')

if (JSON.parse(localStorage.getItem('id')).length >= 1) {
    buyCount.classList.remove("none")
    buyCount.textContent = `${JSON.parse(localStorage.getItem('id')).length}`
}


let sum = 0
const total = document.querySelector('.total')
let numCount = 1


for (let i = 0; i < JSON.parse(localStorage.getItem('id')).length ; i++) {
    let price

    const card = document.createElement('div')
    document.querySelector('.shopping-cart').append(card)
    card.classList.add('shopping-cart_item')
    
    const card_img = document.createElement('img')
    card_img.classList.add('card_img')

    const card_name = document.createElement('p')
    card_name.classList.add('card_name')

    const card_cost = document.createElement('p')
    card_cost.classList.add('card_cost')

    const card_final_cost = document.createElement('p')
    card_final_cost.classList.add('card_final_cost')

    if (2 > JSON.parse(localStorage.getItem('id'))[i]) {
        card_img.src = headphones[i].img
        card.append(card_img)

        card_name.textContent = headphones[i].title
        card.append(card_name)

        card_cost.textContent = `${headphones[i].price} ₽`
        card.append(card_cost)
        price = headphones[i].price
    } 

    if (2 < JSON.parse(localStorage.getItem('id'))[i]) {
        card_img.src = wirelessHeadphones[i].img
        card.append(card_img)

        card_name.textContent = wirelessHeadphones[i].title
        card.append(card_name)

        card_cost.textContent = `${wirelessHeadphones[i].price} ₽`
        card.append(card_cost)
        price = wirelessHeadphones[i].price
    }

    const deleteBasket = document.createElement('img')
    deleteBasket.src = './assets/svg/VectorDelete.svg'
    deleteBasket.classList.add('deleteBasket')
    card.append(deleteBasket)

    const plusMinus = document.createElement('div')
    plusMinus.classList.add('plusMinus')
    card.append(plusMinus)

    const minus = document.createElement('img')
    const plus = document.createElement('img')
    const num = document.createElement('p')

    minus.src = './assets/svg/EllipseMinus.svg'
    minus.classList.add('minus')
    plus.src = './assets/svg/EllipsePlus.svg'
    plus.classList.add('plus')
    num.textContent = numCount
    num.classList.add('cart_count')
    plusMinus.append(minus)
    plusMinus.append(num)
    plusMinus.append(plus)

    card_final_cost.textContent = `${price*numCount} ₽`
    card.append(card_final_cost)

    sum += price*numCount 
}

total.textContent = `${sum} ₽`



