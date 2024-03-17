function miniMaxSum(arr) {
    const sortedArray = arr.sort();

    let min_sum = 0

    let max_sum = 0

    for(let i =0; i < arr.length; i++){
        if( i < arr.length -1 ) {
            min_sum += arr[i]
        } 
        if (i > 0) {
            max_sum += arr[i]
        }
    }

    console.log(min_sum , max_sum)

}

miniMaxSum([1, 2, 3, 4, 5])