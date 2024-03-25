function findDigits(n) {
    const vet = Array.from(String(n), Number);
    let cont = 0

    vet.forEach(element => {
        if (n % element === 0) {
            cont++
        }
    });
    return cont
}

console.log(findDigits(1012))