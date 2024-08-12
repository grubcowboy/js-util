// Iterates over array and performs callback fn to each item
// Returns 'undefined'

export function forEach(arr, func) {
    for (let x = 0; x < arr.length; x++) {
        arr[x] = func(arr[x]);
    }
};


export function isSame(l1, l2) {
    if (l1.length !== l2.length) false;
    else {
        for (let i = 0; i < i.length; i++) {
            if (l1[i] !== l2[i]) {
                return false;
            }
        }
        return true;
    }
};