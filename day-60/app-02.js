const prm = new Promise( (res, rej) => {
    rej({ err : 'failed' })
} )

prm.then( obj => console.log(obj) )
    .catch(err => console.log(err))

// instead of above you can write below code

async function handleAsyncOp() {

    try {
        const obj = await prm
    } catch (error) {
        console.log(error)
    }
}