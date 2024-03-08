function birthdayCakeCandles(candles) {
    let maior = 0
    let cont = 1
    candles.forEach(element => {
        if (element > maior) {
            maior = element
            cont = 1
        } else if(element == maior) {
            cont++
        }
    });
    return cont
}