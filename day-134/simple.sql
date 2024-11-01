drop database employee;

create database company;

use company;

create table employee(
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL, 
    gender ENUM('Male', 'Female'),
    doj DATE NOT NULL,
    department VARCHAR(255) NOT NULL,
    salary DECIMAL(10,2) NOT NULL
)

desc employee;

select * from employee;

INSERT INTO employee (first_name, last_name, email, gender, doj, department, salary)
VALUES ('Neysa', 'Catonnet', 'ncatonnet1@stanford.edu', 'Female', '2022-02-05', 'Sales', 75000);

select * from employee;

select doj, first_name from employee;

INSERT INTO employee (first_name, last_name, email, gender, doj, department, salary)
VALUES ('John', 'Doe', 'johndoe@example.com', 'Male', '2023-04-12', 'Marketing', 60000);

INSERT INTO employee (first_name, last_name, email, gender, doj, department, salary)
VALUES ('Jane', 'Smith', 'janesmith@example.com', 'Female', '2022-11-20', 'HR', 55000);

INSERT INTO employee (first_name, last_name, email, gender, doj, department, salary)
VALUES ('Michael', 'Johnson', 'michaeljohnson@example.com', 'Male', '2021-09-05', 'Finance', 80000);


INSERT INTO employee (first_name, last_name, email, gender, doj, department, salary)
VALUES ('Emily', 'Brown', 'emilybrown@example.com', 'Female', '2023-01-15', 'IT', 70000);

SELECT * from employee;


UPDATE employee
SET salary = 80000
WHERE email = 'ncatonnet1@stanford.edu';

SELECT * from employee;

DELETE FROM employee
WHERE email = 'ncatonnet1@stanford.edu';

select * from employee;

SELECT COUNT(*) FROM employee;

SELECT SUM(salary) FROM employee;

SELECT AVG(salary) FROM employee;

SELECT MIN(salary) FROM employee;

SELECT MAX(salary) FROM employee