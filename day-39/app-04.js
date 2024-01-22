function findPairsOfSum(n, st, ed) {

    for (let i = st; i <= ed; i++) {
        for (let j = (i + 1); j <= ed; j++) {
            if ((i + j) == n) {
                console.log('Got The Pair (' + i + ' + ' + j + ') = ' + n)
                break
            }
        }
    }

}

findPairsOfSum(7, 1, 10)