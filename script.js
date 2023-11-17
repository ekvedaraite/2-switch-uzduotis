// 1 užduotis
var car = prompt('Įveskite savo automobilio ženklą')
car = car.toLowerCase()
switch(car) {
    case 'vw':
    case 'audi':
    case 'bentley':
    case 'bugatti':
    case 'lamborghini':
    case 'porsche':
    console.log('VW Group')
    break
    case 'bmw':
    case 'mini':
    case 'rolls-royce':
    console.log('BMW Group')
    break
    default: 
    console.log('Nepriklauso nei BMW Group, nei VW Group')
}

// 2 užduotis
var userInput = prompt('Įveskite daržovės arba vaisiaus pavadinimą')
switch(userInput) {
    case 'Morka':
    case 'Bulvė':
    case 'Kopūstas':
    case 'Burokėlis':
    case 'Rabarbaras':
    console.log('Daržovė')
    break
    case 'Apelsinai':
    case 'Obuoliai':
    case 'Kivis':
    case 'Avokadas':
    case 'Persikas':
    console.log('Vaisius')
    default:
    console.log('Nėra sąraše')
}

// 3 užduotis
var weekDay = prompt('Įrašykite šiandienos savaitės dieną skaičiu nuo 0 iki 6')
switch (weekDay) {
    case '0':
    weekDay = 'pirmadienis'
    break
    case '1':
    weekDay = 'antradienis'
    break
    case '2':
    weekDay = 'trečiadienis'
    break
    case '3':
    weekDay = 'ketvirtadienis'
    break
    case '4':
    weekDay = 'penktadienis'
    break
    case '5':
    weekDay = 'šeštadienis'
    break
    case '6':
    weekDay = 'sekmadienis'
    break
    default:
    weekDay = 'Netinkama diena'
}

console.log(weekDay)