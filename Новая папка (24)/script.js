let day = 3;
let dayName;

switch (day) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "Invalid day";

}
// Цикл for
console.log(dayName)
for (let i = 0; i < 5; i++) {
    console.log("Цикл for", i)
}
// Цикл while
let j = 0;
while (j < 5) {
    console.log("Цикл while", j);
    j++
}
// Цикл do while
let i = 0;
do {
    console.log("Цикл do while", i)
    i++;
} while (i < 5)


let users = [
    {
        name: "Ivan Ivanov",
        status: "active",
        total_sum: 1500
    },
    {
        name: "Petr Petrov",
        status: "blocked",
        total_sum: 300
    },
    {
        name: "Anya Sidorova",
        status: "remote",
        total_sum: 750
    }
];

console.log(users);
console.log(users[0]);
console.log(users[0].name);

let highSpenders = []
let blockedUsers = []
let totalUsers = users.length;

for (user in users) {
    if (users[users].total_sum > 1000){
        highSpenders.push(users[user])
    }

    if (users[user].status == "blocked" || users[user].status == "remote"){
        blockedUsers.push(users[user]);
    }
}
console.log("Те кто потратили больше 1000 рублей", highSpenders)
console.log("Заблокированные или удалённые", blockedUsers)
console.log("Total users", totalUsers)
console.log("Количество тех которые потратили больше 1000 рублей", highSpenders)
console.log("Те кто заблокированы", blockedUsers)