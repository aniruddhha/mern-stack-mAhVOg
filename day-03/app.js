const dt = document.getElementById('dt')
setInterval( () =>{
    const date = new Date()
    dt.innerHTML = date.toISOString()
}, 1000 )