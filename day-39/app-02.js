
function nestedFor() {
    for (let i = 0; i < 10; i++) {
    
        console.log("🟢 i = " + i)
        for (let j = 0 ; j < 10; j++) {
            console.log(" j = " + j)
        }
    }
}

function nestedWhile() {
    let cnt = 0
    while (++cnt < 10) {
        console.log("🟢 count " + cnt)

        let visited = 10
        while ( visited >= 0 ) {
            console.log(visited--)
        }
    }
}

nestedWhile()

