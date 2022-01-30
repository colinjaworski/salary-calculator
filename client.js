// console.log('Hello');
$(document).ready(readyNow);

function readyNow() {
    // console.log('jQuery running?');
    // on click, append box to DOM
    $( "#submit-button" ).on( 'click', buttonClick)
    $( "#myTable" ).on( 'click', '#delete-button', removeRow)
    // target "myTable" and run a function that removes rows when clicked
    $( "#submit-button" ).on( 'click', redBackground)
    
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

function removeRow() {
    // console.log('in removeRow');
    $(this).parents("tr").remove(); 
}

function redBackground() {
    if (total>20000) {
    // console.log('the total value is', total);
    $("#total").css("background", "red");
    } else {
    $("#total").css("background", "white");
        
    }
}


function employeeSal(total) {
    // console.log('in employee salary', total);
    $("#monthly-value").empty()
    $("#monthly-value").append(`${total}`)
}



