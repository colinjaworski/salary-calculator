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
        annualSalary: $('#annual-salary').val()
        }
        
        employeeArray.push(employeeObject)
        console.log(employeeObject);

        $( '#first-name' ).val( '' );
        $( '#last-name' ).val( '' );
        $( '#ID' ).val( '' );
        $( '#title' ).val( '' );
        $( '#annual-salary' ).val( '' );
  } 



//   $(append(newEmployee.firstNameInput));