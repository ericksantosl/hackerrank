function staircase(n) {
    for(let i = 0 ; i < n ; i++) {
        let string = ''
        for(let j = 0 ; j < n-i-1 ; j++) {
            string += ' '
        }
        for(let k = 0 ; k < i+1 ; k++) {
            string += '#'
        }
        console.log(string)
    }

}
