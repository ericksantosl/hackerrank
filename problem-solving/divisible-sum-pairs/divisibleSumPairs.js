function divisibleSumPairs(n, k, ar) {
    let cont = 0
    for (let i = 0 ; i < n ; i++) {
        for (let x = 0 ; x < n ; x++) {
            if (i != x && (ar[i] + ar[x]) % k === 0) {
                cont++
            }
        }
    }

    return cont/2
}

console.log(divisibleSumPairs(5, 2, [5, 9, 10, 7, 4]))