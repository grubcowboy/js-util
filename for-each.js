// Iterates over array and performs callback fn to each item
// Returns 'undefined'



function forEach(arr, func) {
    for (let x = 0; x < arr.length; x++) {
        arr[x] = func(arr[x]);
    }
    console.log(arr);
};

forEach([0, 0, 0], i => i + 1);
