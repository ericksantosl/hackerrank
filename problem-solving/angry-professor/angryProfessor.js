function angryProfessor(k, a) {
    let att = 0
    let pon = 0
    a.forEach(element => {
        if (element <= 0) {
            pon++
        } else {
            att++
        }
    });
    if (pon >= k) {
        return `NO`
    } else {
        return `YES`
    }
}
console.log(angryProfessor(2, [0, -1, 2, 1]))