export function handleLogin(e) {
    e.preventDefault()

    console.log(e)

    const email = lgnFrm.elements['email'].value
    const password =  lgnFrm.elements['password'].value

    console.log(`Email ${email}, Password ${password}`)

    if(email == 'abc' && password == 'pqr') {
        window.location = '../dashboard/dashboard.html'
    }
}