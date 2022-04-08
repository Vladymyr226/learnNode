 const fs = require('fs')

 
//  Write javascript object to file as JSON


// const man = {
//     "name": "Sara",
//     "age": 23,
//     "gender": "Female",
//     "department": "History",
//     "car": "Honda"
// }

// let data = JSON.stringify(man, null, 2)
// fs.writeFileSync('man.json', data)


// Использование fs.writeFile


// let student = {
//     name: 'Mike',
//     age: 23,
//     gender: 'Male',
//     department: 'English',
//     car: 'Honda'
// };

// let data2 = JSON.stringify(student, null, 2);

// fs.writeFile('student.json', data2, (err) => {
//     if (err) throw err;
//     console.log('Data written to file');
// });

// console.log('This is after the write call');


//read JSON


// let jsonData = require('./man.json')
// console.log(jsonData)

//or

// let rawdata = fs.readFileSync('man.json')
// let student = JSON.parse(rawdata)
// console.log(student)


//********************************************
//read by lines, read Nth character from file

var array = fs.readFileSync('text.txt').toString().charAt(10)
console.log(array)

var array = fs.readFileSync('text.txt').toString().split("\n")
for(i in array) {
    console.log(array[i])
}