
let a = 10

export function SimplePure({ msg }) {

    a = 90 //bad: side effect

    return(
        <h1>{msg}</h1>
    )
}

export function SimplePureProp({ msg ,a }) {

    let abc = 90

    if(a < 10) {
        abc = 89
    }

    return(
        <h1>{msg} {a} {abc}</h1>
    )
}