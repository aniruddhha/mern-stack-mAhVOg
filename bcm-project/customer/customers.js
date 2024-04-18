const tbody = document.querySelector('#customerTable tbody');

const custs = [
    {id : 1, mobile: '12234455', name: 'Jhn Doe', dob: '1990-01-01'},
    {id : 2, mobile: '23344557', name: 'Mon Tee', dob: '1980-01-01'},
    {id : 3, mobile: '78792344', name: 'Son Dee', dob: '1981-06-08'},
    {id : 4, mobile: '90234557', name: 'Ton Don', dob: '1981-06-08'},
]

// const hi = () => {
//     console.log(`Button Clicned`)
// }

const onDel = (id) => {
    console.log(`Delete Called ${id}`)

   
}

function beginersWay() {
    let ind = -1
    for ( let i = 0 ;i < custs.length; i++) {
        const cst = custs[i]
        if(cst.id == id) ind = i
    }

    console.log(custs.slice(0, ind))
    console.log(custs.slice(ind+1, custs.length))

    const deleted = [...custs.slice(0, ind), ...custs.slice(ind+1, custs.length) ]
    custs = deleted
    console.log(deleted)

    populateTable()
}

function deleteRowById(id) {
    console.log(`Id ${id}`)
    const index = custs.findIndex(cst => cst.id === id);
    if (index !== -1) {
        custs.splice(index, 1); // Remove the customer from the array
        const row = document.getElementById(`${id}`);
        if (row) {
            row.remove(); // Remove the corresponding row from the table
        }
    }
}



function populateTable() {
    custs.forEach( cst => {
        const row = document.createElement('tr');
    
        const { id, mobile, name, dob } = cst
        // const id = cst.id
        // const mobile = cst.mobile
        // const name = cst.name
        // const dob = cst.dob
    
    
        row.innerHTML = `
            <td>${id}</td>
            <td>${mobile}</td>
            <td>${name}</td>
            <td>${dob}</td>
            <td>
                <button>Edit</button>
                <button onclick=" deleteRowById(${id})">Delete</button>
            </td>
        `
    
        row.id = id
        tbody.appendChild(row)
    })
}

function clearTable() {
    tbody.remove()
}

populateTable()




