let height = document.getElementById('height')
let age = document.getElementById('age')
let weight = document.getElementById('weight')
let kcalGrundumsatz = document.getElementById('kcalGrundumsatz')
let kJGrundumsatz = document.getElementById('kJGrundumsatz')
let kcalGesamtumsatz = document.getElementById('kcalGesamtumsatz')
let kJGesamtumsatz = document.getElementById('kJGesamtumsatz')
let man = document.getElementById('man')
let woman = document.getElementById('woman')
let activities = document.getElementById('activities')

function countColories() {

    let grundumsatz
    let gesamtumsatz

    if (woman.checked) {
        grundumsatz = 655.1 + (9.6 * weight.value) + (1.8 * height.value) - (4.7 * age.value)
    } else if (man.checked) {
        grundumsatz = 664.7 + (13.7 * weight.value) + (5 * height.value) - (6.8 * age.value)
    }

    if (activities.value === "sleep") {
        gesamtumsatz = grundumsatz * 0.95
    } else if (activities.value === "sitting") {
        gesamtumsatz = grundumsatz * 1.2
    } else if (activities.value === "easyWork") {
        gesamtumsatz = grundumsatz * 1.5
    } else if (activities.value === "simpleWork") {
        gesamtumsatz = grundumsatz * 1.7
    } else if (activities.value === "middleWork") {
        gesamtumsatz = grundumsatz * 1.9
    } else if (activities.value === "hardWork") {
        gesamtumsatz = grundumsatz * 2.2
    }

    //converting kilocalories to kilojoules 
    let grundumsatzKJ = grundumsatz * 4.184
    let gesamtumsatzKJ = gesamtumsatz * 4.184

    kcalGrundumsatz.innerHTML = grundumsatz.toFixed(2) + " " + "Kcal"
    kJGrundumsatz.innerHTML = grundumsatzKJ.toFixed(2) + " " + "KJ"
    kcalGesamtumsatz.innerHTML = gesamtumsatz.toFixed(2) + " " + "Kcal"
    kJGesamtumsatz.innerHTML = gesamtumsatzKJ.toFixed(2) + " " + "KJ"

}