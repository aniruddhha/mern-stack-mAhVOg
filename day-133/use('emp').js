use('emp')

/*db.emp.insertMany([
    {
        "first_name": "Neysa",
        "last_name": "Catonnet",
        "email": "ncatonnet1@stanford.edu",
        "gender": "Female",
        "doj": "2022-02-05",
        "department": "Sales",
        "salary": 75000,
        "skills": ["Negotiation", "Sales Analysis"]
    },
    {
      
        "first_name": "Genevieve",
        "last_name": "Bourque",
        "email": "gbourque2@harvard.edu",
        "gender": "Female",
        "doj": "2023-03-15",
        "department": "Marketing",
        "salary": 82000,
        "skills": ["Brand Management", "SEO"]
    },
    {
        
        "first_name": "Amir",
        "last_name": "Darzi",
        "email": "adarzi3@mit.edu",
        "gender": "Male",
        "doj": "2021-07-22",
        "department": "Engineering",
        "salary": 92000,
        "skills": ["Java", "Python", "System Design"]
    },
    {
       
        "first_name": "Ling",
        "last_name": "Zhang",
        "email": "lzhang4@stanford.edu",
        "gender": "Female",
        "doj": "2020-10-12",
        "department": "Engineering",
        "salary": 98000,
        "skills": ["Machine Learning", "Data Science", "Python"]
    },
    {
       
        "first_name": "Carlos",
        "last_name": "Sanchez",
        "email": "csanchez5@princeton.edu",
        "gender": "Male",
        "doj": "2023-01-10",
        "department": "Finance",
        "salary": 88000,
        "skills": ["Financial Modeling", "Excel", "Risk Analysis"]
    },
    {
      
        "first_name": "Ayesha",
        "last_name": "Khan",
        "email": "akhan6@caltech.edu",
        "gender": "Female",
        "doj": "2021-04-27",
        "department": "Marketing",
        "salary": 79000,
        "skills": ["Social Media", "Content Creation"]
    },
    {
       
        "first_name": "Tom",
        "last_name": "Peters",
        "email": "tpeters7@berkeley.edu",
        "gender": "Male",
        "doj": "2022-09-05",
        "department": "Sales",
        "salary": 65000,
        "skills": ["CRM", "Sales Forecasting"]
    },
    {
        
        "first_name": "Lucia",
        "last_name": "Romano",
        "email": "lromano8@oxford.edu",
        "gender": "Female",
        "doj": "2019-11-20",
        "department": "Engineering",
        "salary": 102000,
        "skills": ["C++", "Embedded Systems"]
    },
    {
        
        "first_name": "David",
        "last_name": "Brown",
        "email": "dbrown9@columbia.edu",
        "gender": "Male",
        "doj": "2022-06-17",
        "department": "HR",
        "salary": 71000,
        "skills": ["Recruiting", "Employee Relations"]
    },
    {
       
        "first_name": "Maya",
        "last_name": "Lee",
        "email": "mlee10@mit.edu",
        "gender": "Female",
        "doj": "2023-05-18",
        "department": "Finance",
        "salary": 85000,
        "skills": ["Accounting", "Budgeting"]
    }
])*/
//Find All Employees Who Joined After 2023-01-01 and Sort by Salary in Descending Order

/*db.emp.aggregate([
    { $match: { doj: { $gt : '2023-01-01' }  }},
    { $sort: { salary: -1 } }
])*/


//  Calculate the Average Salary by Department
/*db.emp.aggregate([

    {  // stage 1
        $group: {
            _id: '$department',
            avgSal: { $avg: '$salary' }
        } 
    },
    { // stage 2
        $project: {
            department: '$_id',
            avgSal: 1,
            _id: 0
        }
    }
])*/

// List of Employees Along with Each of Their Skills

/*db.emp.aggregate([
    { $unwind: '$skills' },
    { $project: {
        first_name: 1,
        last_name:  1,
        skill: '$skills',
        _id: 0
    } }
])*/

// Count the Number of Employees in Each Department

db.emp.aggregate([
    {
        $group: {
            _id: '$department',
            empCnt: { $sum: 1 }
        }
    },
    {
        $project: {
            department: '$_id',
            empCnt: 1,
            _id: 0
        }
    }
])