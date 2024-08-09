// Iterates over array and performs callback fn to each item
// Returns 'undefined'

export function forEach(arr, func) {
    for (let x = 0; x < arr.length; x++) {
        arr[x] = func(arr[x]);
    }
};