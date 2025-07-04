function filterRange(arr, a, b) {
    return arr.filter((num) => a <= num && num <= b);
}

function filterRangeInPlace(arr, a, b) {
    for (let i=0, n=arr.length; i<n; i++) {
        if (a > arr[i] || arr[i] > b){
            arr.splice(i, 1);
            i--;
        }
    }
}

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);
console.log(filtered);

filterRangeInPlace(arr, 1, 4);
console.log(arr);
