let data = require('./foodItems.json');

//print all food items
console.log(data);

//function to print foodItem based on a particular category
function printFoodItem(categ){
    data.forEach((item) =>{
        if(item.category === categ){
            console.log(item);
        }
    })
}

// function to print foodItems based on calories
function printFoodItemWithCalorie(condition, num){
    let output = data.filter((item) => {
        if(condition === '>') return item.calorie > num;
        else return item.calorie < num;
    })
    console.log(output);
}

//list all the food items with category vegetables
printFoodItem('Vegetable');

//list all the food items with category fruit
printFoodItem('Fruit');

//list all the food items with category protien
printFoodItem('Protein');

//list all the food items with category nuts
printFoodItem('Nuts');

//list all the food items with category grains
printFoodItem('Grain');

// list all the food items with category dairy
printFoodItem('Dairy');


//list all the food items with calorie above 100
printFoodItemWithCalorie('>', 100);

// list all the food items with calorie below 100
printFoodItemWithCalorie('<', 100);

// list all the food items with highest protien content to lowest
data.sort(function(a, b){
    return b.protiens - a.protiens;
})
console.log(data);

// list all the food items with lowest cab content to highest
data.sort(function(a, b){
    return a.protiens - b.protiens;
})

let students = [
    {name:"abc", rno:1, marks:50},
    {name:"def", rno:2, marks:80},
    {name:"ddc", rno:31, marks:30},
    {name:"xyz", rno:13, marks:40},
    {name:"pqr", rno:14, marks:90},
]

//find the average of students who have scored more than or equals
//60, after getting a grace of 10 marks who scored < 60

//use map to transform the array
let newStudents = students.filter((student) => {
    let marks = student.marks;
    if(marks + 10 >= 60){
        return student;
    }
})
console.log(newStudents);

const initialVal = 0;
//now calculate the avg of marks which are >= 60
let avgMarks = newStudents.reduce((accum, student) => {
    return (accum + student.marks) / (newStudents.length);
}, 0)
console.log('Avg Marks: ', avgMarks);

