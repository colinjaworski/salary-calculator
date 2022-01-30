// console.log('Hello');
$(document).ready(readyNow);

function readyNow() {
    // console.log('jQuery running?');
    // on click, append box to DOM
    $( "#submit-button" ).on( 'click', buttonClick)
    $( "#myTable" ).on( 'click', '#delete-button', deleteButton)
    

}    

let employeeArray = [];
let total = 0;

  function buttonClick(){ //firstNameInput, lastNameInput, idInput, titleInput, annualSalaryInput
    let employeeObject = {
        firstName: $('#first-name').val(),
        lastName: $('#last-name').val(),
        ID: $('#ID').val(),
        title: $('#title').val(),
        annualSalary: Number($('#annual-salary').val())
        }
        
        employeeArray.push(employeeObject)
        // console.log(employeeObject);

        $('#myTable').append(`<tr> 
        <th>${employeeObject.firstName}</th>
        <th>${employeeObject.lastName}</th>
        <th>${employeeObject.ID}</th>
        <th>${employeeObject.title}</th>
        <th>${employeeObject.annualSalary}</th>
        <th>${'<button id="delete-button">Delete</button>'}</th>
        </tr>`)
        
        $( '#first-name' ).val( '' );
        $( '#last-name' ).val( '' );
        $( '#ID' ).val( '' );
        $( '#title' ).val( '' );
        $( '#annual-salary' ).val( '' );

        total += (employeeObject.annualSalary) / 12
        employeeSal(total)
        // $( "#submit-button" ).on( 'click', employeeSal)
  } 

function deleteButton() {
    console.log('sup player?');
}

function employeeSal(total) {
    console.log('in employee salary', total);
    $("#monthly-value").empty()
    $("#monthly-value").append(`${total}`)
}
