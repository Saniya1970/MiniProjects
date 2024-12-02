const plusBtn = document.querySelector("#plus")
const minusBtn = document.querySelector("#minus")
const reset = document.querySelector(".resetbtn")
const count = document.querySelector(".value")
const changeBy = document.querySelector(".changeBy")

plusBtn.addEventListener('click', () => {
    const countValue = parseInt(count.innerText)
    const changeByValue = parseInt(changeBy.value);
    count.innerText = countValue + changeByValue

})

minusBtn.addEventListener('click', () => {
    const countValue = parseInt(count.innerText)
    const changeByValue = parseInt(changeBy.value)
    count.innerText = countValue - changeByValue
})

reset.addEventListener('click', () => {
    count.innerText = 0
})

