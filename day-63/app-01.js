function onBdLd(ev, p) {
    console.log(`Body Loaded`)

    console.log(ev)
    p.innerText = `${ev.x}, ${ev.y}`

}


function onYesClicked() {
    console.log(`Yes Clicked`)
    alert('yes clicked')
}

document.addEventListener('DOMContentLoaded', function(ev) {
    console.log(`Content Loaded`)
    console.log(ev)

    const btnNo = document.getElementById('btnNo')
    btnNo.onclick = btnEv =>  {
        alert(`No Clicked`)
        console.log(btnEv)
    }

    const dv = document.getElementById('dvCol')
    dv.onmouseenter = () => dv.style.backgroundColor = 'red'
    dv.onmouseleave = () => dv.style.backgroundColor = 'cadetblue'
})