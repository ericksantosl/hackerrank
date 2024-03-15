function bonAppetit(bill, k, b) {
    let soma = 0
    bill.forEach(element => {
        soma += element
    });
    let item = soma - bill[k]
    let total = item / 2
    if (b === total) {
        return console.log('Bon Appetit')
    } else {
        let dif = b - total
        return console.log(dif)
    }
}

bonAppetit([3, 10, 2, 9], 1, 7)