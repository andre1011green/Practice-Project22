# Practice-Project22
This project (Practice Project 2) is originally my Project 1 with Revature that got lost when my old laptop was 
stolen and was made with plain Java. This application which was made with Spring Boot 3 will allow employees to
create a reimbursement ticket for cost that came out of their own pocket that benefited the company. Regular 
authorized employees (NOT janitors, dishwashers, painters etc.)  to login to the application at
http://ebonymailandre.us-west-1.elasticbeanstalk.com/ and see all of their reimbursement tickets. 
This is the version that is deployed on Amazon Web Services, Elastic Beanstalk.
There are currently 5 employees:
username: Fatfreddy,    password: bedrock
username: Newphew,      password: Barn
username: Runner,       password: Pebble
username: Soright,      password: Jean
username: Bossman,      password: Natty     (The one and only manager who can create employees in the Postgres Database and who can approve or deny tickets)

The one Manager/Admin will login at http://ebonymailandre.us-west-1.elasticbeanstalk.com/admin/managerLogin

This application uses the Postgres Database, Fetch API (AJAX), CSS, HTML, Java via Spring Boot 3
Once Spring Security authenticates a user, the username will be displayed on a web page, along with contact info
