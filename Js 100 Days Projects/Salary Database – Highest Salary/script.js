const salary = { raju: 25000, anu: 40000, vipin: 32000 };

let highestSalary = 0;
 
for (let person in salary){
    if(salary[person] > highestSalary){
        highestSalary = salary[person];

    }
    }
console.log("Highest Salary:", highestSalary);