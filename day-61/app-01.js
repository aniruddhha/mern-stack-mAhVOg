
function onAddClicked() {
    console.log(`Addition Clicked`)

    const ipNum1 = document.getElementById('ipNum1')
    const ipNum2 = document.getElementById('ipNum2')

    console.log(Number.parseInt(ipNum1.value) + Number.parseInt(ipNum2.value))

    const hRes = document.getElementById('hRes')
    hRes.textContent = Number.parseInt(ipNum1.value) + Number.parseInt(ipNum2.value)
}

function onSubClicked() {
    console.log(`Subtraction Clicked`)
}

function onMulClicked() {
    console.log(`Multiplication Clicked`)
}

function onDivClicked() {
    console.log(`Division Clicked`)
}