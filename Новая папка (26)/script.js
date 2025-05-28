let students = [
    {
       name: "Гошан52",
       age: "19",
       grade: "5"
    },

    {
       name: "Егор",
       age: "18",
       grade: "5"
    },

    {name: "Матвей",
      age:"14",
      grade: "4"
   }
]
console.log(students)
console.log(students[0])
console.log(students[0].name)

let excellentStudents = []
let adultStudents = []


 for (student of students){
    if (student.age > 17){
       adultStudents.push(student)
    }
    if (student.grade > 4){
       excellentStudents.push(student)
    }
 }
console.log("Отличники", excellentStudents)
console.log("Старшие", adultStudents)
console.log("Количество учеников", students.length)
console.log("Количество отличников", excellentStudents.length)
console.log("Количество совершеннолетних", adultStudents.length)