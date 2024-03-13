const arr = [
    'android',
    'apple',
    'google',
    'ibm',
    'nvidia',
    'abc',
    'pqr'
]

const addUlItems = () => {
    const ul = document.getElementById('ulComp')

    arr.forEach( company => {
        const li = document.createElement('li')
        li.textContent = company
        ul.append(li)
    } )
}

addUlItems()