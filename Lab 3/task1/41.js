function filterRangeInPlace(arr, n, m) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < n || arr[i] > m) {
            arr.splice(i, 1);
            i--;
        }
    }
}

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

alert( arr ); // [3, 1]