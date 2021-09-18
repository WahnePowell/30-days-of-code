//returns number of swaps
var bubbleSortAsc = function() {
    // Track number of elements swapped during a single array traversal
    var numberOfSwaps = 0;
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n - 1; j++) {
            // Swap adjacent elements if they are in asc order
            if (a[j] > a[j + 1]) {
                //swap(a[j], a[j + 1]);
                var temp1 = a[j];
                var temp2 = a[j+1];
                a[j] = temp2;
                a[j+1] = temp1;

                numberOfSwaps++;
            }
        }

        // If no elements were swapped during a traversal, array is sorted
        if (numberOfSwaps == 0) {
            break;
        }
    }

    return numberOfSwaps;
};

//call the function sort and get number of swaps
var swapNum = bubbleSortAsc();
console.log("Array is sorted in "+ swapNum +" swaps.");
console.log("First Element: " + a[0]);
console.log("Last Element: " + a[a.length - 1]);