/*
   Filename: devineCreation.js
   Author:   Andre Long
   Date:     10/17/2024
   Description: The purpose of this Javascript file is to display all employees
   and to eighter create or delete employees
*/

window.onload = begin();

function begin()
{
   const peppermintDiv = document.getElementById('companyEmployees');

   fetch('http://localhost:8080/admin/createDeleteEmployees')
    .then(response => response.text())
    .then(text => {

                    let info = " ";
                    let snoopdog = JSON.parse(text);
                    let lengthSnoopDog = snoopdog.length;

                    for(let j = 0; j < snoopdog.length; j++)
                    {
                        data = snoopdog[j]; //Controls which employee to display
                        oneEmployeeArray = data.split(",");
                        for(let i = 0; i < 1; i++)
                        {

                            info += "<tr class = 'suckerFish'>" +
                                    "<td class='sonOfSuckerFish'>" + oneEmployeeArray[i]   + "</td>" +
                                    "<td class='sonOfSuckerFish'>" + oneEmployeeArray[i+1] + "</td>" +
                                    "<td class='sonOfSuckerFish'>" + oneEmployeeArray[i+2] + "</td>" +
                                    "<td class='sonOfSuckerFish'>" + oneEmployeeArray[i+3] + "</td>" +
                                    "<td class='sonOfSuckerFish'>" + oneEmployeeArray[i+4] + "</td>" +
                                    "<td class='sonOfSuckerFish'>" + oneEmployeeArray[i+5] + "</td>" +
                                    "<td class='sonOfSuckerFish'>" + oneEmployeeArray[i+6] + "</td>" +
                                    "<td class='sonOfSuckerFish'>" + oneEmployeeArray[i+7] + "</td>" +
                                    "<td class='sonOfSuckerFish'>" + oneEmployeeArray[i+8] + "</td>" +
                                    "<td class='sonOfSuckerFish'>" + oneEmployeeArray[i+10] + "</td>" +
                                    "<td class='sonOfSuckerFish'>" + oneEmployeeArray[i+11] + "</td></tr>";
                        }
                    }
                    let Outer = "<table id ='AndreTable'><tr>" +
                                "<th id='employeeid'>Employee ID</th>" +
                                "<th id='role'>Role</th>" +
                                "<th id='enabled'>Active</th>" +
                                "<th id='username'>Username</th>" +
                                "<th id='jobtitle'>Job Title</th>" +
                                "<th id='firstname'>Firstname</th>" +
                                "<th id='lastname'>Lastname</th>" +
                                "<th id='phone'>Phone #</th>" +
                                "<th id='email'>Email</th>" +
                                "<th id='datehired'>Date Hired</th>" +
                                "<th id='datefired'>Date Fired</th></tr>";

                    peppermintDiv.innerHTML = Outer + info + "</table>";




              });

}