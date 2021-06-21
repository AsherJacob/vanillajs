import { getRandomInt } from "./app.js";

const hex = ["0" , "1" , "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]

const btn = document.getElementById('btn')

btn.addEventListener('click', () => {
    let hex_code = "#"

    for(let i = 0; i < 6; i++){
        let randomNumber = getRandomInt(hex);
        hex_code +=  hex[randomNumber]
    }

    document.querySelector('main').style.backgroundColor = hex_code
    document.querySelector('.bgc-span').textContent = hex_code
})