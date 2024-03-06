// i want to get data from facebook, 
// then whatever data i will get, that data i want clean

const prm = new Promise( (res, rej) => {
    res( { sts : 'success' })
} ) // you got the data from facebook 

prm.then( obj => obj) // you cleaned the data
    .then( obj => obj ) // you modified as per requirement
    .then( obj => console.log(obj) ) // you have utlized that data
    .catch( err => console.error(err))