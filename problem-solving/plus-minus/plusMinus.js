function plusMinus(arr) {
    let pos = 0, neg = 0, zero = 0, length = arr.length

    arr.forEach(element => {
        if(element > 0)
            pos++
        else if (element < 0)
            neg++
        else
            zero++
    });

    console.log((pos / length).toFixed(6))
    console.log((neg / length).toFixed(6))
    console.log((zero / length).toFixed(6))
}

plusMinus([2, 3, 0, -1, -7])