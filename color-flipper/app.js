const colors = ['#6b705c', '#6d6875', '#9b2226', '#1d3557', '#6930c3' , '#e29578', '#ffd166', '#892b64']

const btn = document.getElementById('btn')

btn.addEventListener('click', () => {
    let randomNumber = getRandomInt(colors);
    document.querySelector('main').style.backgroundColor = colors[randomNumber]
    document.querySelector('.bgc-span').textContent = colors[randomNumber]
})

export function getRandomInt(arr) {
    return Math.floor(Math.random() * (arr.length - 1));
}