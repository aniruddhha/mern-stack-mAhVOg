const custs = [
    {id : 1, mobile: '12234455', name: 'Jhn Doe', dob: '1990-01-01'},
    {id : 2, mobile: '23344557', name: 'Mon Tee', dob: '1980-01-01'},
    {id : 3, mobile: '78792344', name: 'Son Dee', dob: '1981-06-08'},
    {id : 4, mobile: '90234557', name: 'Ton Don', dob: '1981-06-08'},
]


const tbody = document.querySelector('#customerTable tbody');

custs.forEach( cst => {
    const row = document.createElement('tr');

    const { mobile, name, dob } = cst

    row.innerHTML = `
        <td>${1}</td>
        <td>${mobile}</td>
        <td>${name}</td>
        <td>${dob}</td>
        <td><button>Edit</button><button>Delete</button></td>
    `

    tbody.appendChild(row)
})