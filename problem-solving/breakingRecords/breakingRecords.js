function breakingRecords(scores) {
    let maior = scores[0]
    let menor = scores[0]
    let contMa = 0
    let contMe = 0
    scores.forEach(element => {
        if (element > maior) {
            maior = element
            contMa++
        } else if (element < menor) {
            menor = element
            contMe++
        }
    });
    return [contMa, contMe]
}

console.log(breakingRecords([3, 4, 21, 36, 5, 28, 35, 3, 24, 42]))