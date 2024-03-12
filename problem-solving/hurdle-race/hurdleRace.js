function hurdleRace(k, height) {
    let c = 0
    let m = 0
    height.forEach(element => {
        if (element > m) {
            m = element
        }
    });
    if (m > k) {
        c = m - k
    }

    return c
}

console.log(hurdleRace(7, [2, 5, 4, 5, 2]))