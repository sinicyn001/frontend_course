// let menu = {
//     coffee: 150,
//     tea: 100,
//     cake: 300,
//     pastry: 200,
//     sandwich: 250
//  };

// function placeholder(orderlist){
//     let total = 0;

//     for (let item of orderlist){
//         if (menu[item]){
//             total += menu[item]
//         }    else{
//             console.log(`Товар ${item} отсутствует в меню`)
//         }
//     }


//  if (total > 1000){
//     total *= 0.9

//  }

//  return total;

// }
// let orderList = ['coffee', 'tea', 'cake','pastry','sandwich']
// let total = placeholder(orderList)
// console.log(`Общая сумма заказа: ${total} рублей`)
// console.log(`Чек ${orderList.join(',')}`)

let tile = document.getElementById('title')
console.log(title.innerHTML)

let decription = document.getElementsByClassName('description')
console.log(decription[0].innerHTML)

let i_tag = document.getElementsByTagName('i')
console.log(i_tag[0].innerHTML)
console.log(i_tag[1].innerHTML)