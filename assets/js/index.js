//3 Решить у = -2,4x2+5x-3 В диапазоне от -2 до 2 с шагом 0,5

/*
let step = (range1, range2) => {
  let y
  for (; range1 <= range2; range1 += 0.5) {
    y = -2.4 * Math.pow(range1, 2) + 5 * range1 - 3
    console.log(y)
  }
}

step(-2, 2)
*/

//4 Вывод чисел от limit1 до limit2, которые кратны num

/*
let pin = () => {
  let lim1 = 0,
    lim2 = 100,
    num = 4.5,
    result

  for (; lim1 < lim2; lim1++) {
    result = Math.round(lim1 / num) * num
    console.log(result)
  }
}

pin()
*/

//5 Найти произведение чисел в пределах от limit1 до limit2

/*
let multNumbers = (lim1, lim2) => {
  while (lim1 <= lim2) {
    result = lim1 * lim2
    lim1++
    console.log(result)
  }
}

multNumbers(2, 5)

*/

//6 Найти ближайшее число, которое кратно num к числу, которое введет пользователь userValue

/*
function nearNumber() {
  let userValue = +prompt('Введите первое число')
  let num = +prompt('Введите второе число которое кратно первому')
  result = Math.round(userValue / num) * num
  console.log(
    `Ближайшее число которое кратно ${num} к числу ${userValue} это ${result}`,
  )
}
nearNumber()
*/

//7 Вывести квадрат пифагора

/*
let body = document.body

let createTr = () => {
  let tr = document.createElement('tr')
  return tr
}

let createTd = () => {
  let td = document.createElement('td')
  return td
}

let createTable = (arg1, arg2) => {
  let table = document.createElement('table'),
    p = document.createElement('p')

  for (let i = 1; i <= 9; i++) {
    let tr = arg1()
    for (let j = 1; j <= 9; j++) {
      let td = arg2()
      let res = j * i
      td.innerText = res
      tr.appendChild(td)
      td.className = 'td'
    }
    table.appendChild(tr)
  }
  body.appendChild(p)
  body.appendChild(table)
}

createTable(createTr, createTd)
*/
