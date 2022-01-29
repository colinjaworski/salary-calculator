// console.log('Hello');
$(document).ready(readyNow);

function readyNow() {
    console.log('jQuery running?');
    // on click, append box to DOM
    $( "#submit-button" ).on( 'click', buttonClick)

}    

let employeeArray = [];


  
    

function buttonClick(){ //firstNameInput, lastNameInput, idInput, titleInput, annualSalaryInput
    let employeeObject = {
        firstName: $('#first-name').val(),
        lastName: $('#last-name').val(),
        ID: $('#ID').val(),
        title: $('#title').val(),
        annualSalary: $('#annualSalary').val()
        }
        employeeArray.push(employeeObject)
        console.log(employeeObject);
        
  } 



//   $(append(newEmployee.firstNameInput));