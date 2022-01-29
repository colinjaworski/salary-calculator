// console.log('Hello');
$(document).ready(readyNow);

function readyNow() {
    console.log('jQuery running?');
    // on click, append box to DOM
}    

let employeeArray = [];


function newEmployee(firstNameInput, lastNameInput, idInput, titleInput, annualSalaryInput){
    let employeeObject = {
        firstName: firstNameInput,
        lastName: lastNameInput,
        ID: idInput,
        title: titleInput,
        annualSalary: annualSalaryInput
        }
        employeeArray.push(employeeObject)
  } 
  console.log(newEmployee ('colin', 'jaworski', 47, 'manager', 12345));
  