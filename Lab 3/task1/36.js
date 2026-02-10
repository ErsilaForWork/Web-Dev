function getMaxSubSum(arr) {

    if(arr === null) return 0;

    if(arr.length == 1) return arr[0];

    let currentMaxSum = 0;
    let currentSum = 0;

    for(let i = 0; i < arr.length; i++) {
        currentSum = 0;
        for(let j = i ; j < arr.length; j++) {
            currentSum += arr[j];
            if(currentSum > currentMaxSum) {
                currentMaxSum = currentSum;
            }
        }
    }

    return currentMaxSum;
}

alert(getMaxSubSum([-1, -2, -3]) == 0);
alert(getMaxSubSum([-1, 2, 3, -9]) == 5);
alert(getMaxSubSum([2, -1, 2, 3, -9]) == 6);
alert(getMaxSubSum([-1, 2, 3, -9, 11]));
alert(getMaxSubSum([-1, 2, 3, -9, 11]) == 11);
alert(getMaxSubSum([-2, -1, 1, 2]) == 3);
alert(getMaxSubSum([100, -9, 2, -3, 5]) == 100);
alert(getMaxSubSum([1, 2, 3]) == 6);