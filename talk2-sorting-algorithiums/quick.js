let swap = (arr, i, j) => {
    let tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
};
let partition = (arr, low, high) => {
    let q = low, i;
    for (i = low; i < high; i++) {
        if (arr[i] < arr[high]) {
            swap(arr, i, q);
            q++;
        }
    }
    swap(arr, i, q);
    return q;
};
let quickSort = (arr, low, high) => {
    if (low < high) {
        let pivot = partition(arr, low, high);
        quickSort(arr, low, pivot - 1);
        quickSort(arr, pivot + 1, high);
        return arr;
    }
};

let arr = [3, 2, 1, 0, 10, 55, 8, 100, 20, 47, 3, 62, 48, 87]
let len = arr.length
console.log(quickSort(arr, 0, len))