/*
   Filename: managementScript.js
   Author:   Andre Long
   Date:     10/11/2024
   Description: The purpose of this Javascript file is to display all tickets
   for all employees
*/

window.onload = start();

function start()
{
	ether();
}

function ether()
{

    const welcomeMrManager = document.getElementById('welcomeManager');
    const managerInfoDiv = document.getElementById('managerInfo');
    const allEmployeesDiv = document.getElementById('allEmployees');

    fetch('http://localhost:8080/admin/loggInUser')
          .then(response => response.text())
          .then(text => {
              welcomeMrManager.innerHTML = "<h2 id='welcomeManagerDiv'>Welcome  " + text  +
              "<form id='adminlogout' method='post' action='/admin/managerLogout'>" +
              "<input type='submit' value='Sign Out'></form></h2>";
          });

    fetch('http://localhost:8080/admin/currentUserInfo')
              .then(response => response.text())
              .then(text => {
                  managerInfoDiv.innerHTML = "<h4 id='managerInfoMessage'>  " + text + "</h4>";
              });

    fetch('http://localhost:8080/admin/displayAllTickets')
                  .then(response => response.text())
                  .then(text => {
                                  let billy = JSON.parse(text);
                                  let lengthBilly = billy.length;
                                  let info = " ";

                                  for(let j = 0; j < lengthBilly; j++)
                                  {
                                          data = billy[j]; //Controls which ticket to display
                                          oneTicketArray = data.split(",");
                                          for(let i = 0; i < 1; i++)
                                          {

                                                info += "<tr class = 'suckerFish'>" +
                                                "<td class='sonOfSuckerFish'>" + oneTicketArray[i]   + "</td>" +
                                                "<td class='sonOfSuckerFish'>" + oneTicketArray[i+1] + "</td>" +
                                                "<td class='sonOfSuckerFish'>" + oneTicketArray[i+2] + "</td>" +
                                                "<td class='sonOfSuckerFish'>" + oneTicketArray[i+3] + "</td>" +
                                                "<td class='sonOfSuckerFish'>" + oneTicketArray[i+4] + "</td>" +
                                                "<td class='sonOfSuckerFish'>" + oneTicketArray[i+5] + "</td>" +
                                                "<td class='sonOfSuckerFish'>" + oneTicketArray[i+6] + "</td>" +
                                                "<td class='sonOfSuckerFish'>" + oneTicketArray[i+7] + "</td></tr>";

                                          }
                                  }
                                   let Outer = "<table id ='AndreTable'><tr>" +
                                               "<th id='ticketid'>Ticket Number</th><th id='description'>Ticket Description</th>" +
                                               "<th id='ticketstatus'>Ticket Status</th><th id='amount'>Reimbursement Amount</th>" +
                                               "<th id='datesubmitted'>Date Submitted </th><th id='dateresolved'>Date Resolved</th>" +
                                               "<th id='reimbursementtype'>Reimbursement Type </th><th id='employeeid'> Employee ID</th></tr>";

                                   allEmployeesDiv.innerHTML = Outer + info + "</table>";


                });

}