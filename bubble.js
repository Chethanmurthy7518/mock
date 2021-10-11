var arr = [89, 56, 78, 90, 36, 67, 34, 14, 65];
console.log(arr)

function bub(arr) {
    // for(var i=0; i< arr.length; i++){
    //     for(j=0; j<(arr.length - i - 1); j++){
    //         if(arr[j] > arr[j+1]){
    //             var te = arr[j];
    //             arr[j] = arr[j+1];
    //             arr[j+1]= te;

    //         }
    //     } 

    // }


    var i, j;
    var len = arr.length;

    var isSwapped = false;

    for (i = 0; i < len; i++) {

        isSwapped = false;

        for (j = 0; j < len; j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j]
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                isSwapped = true;
            }
        }

        // IF no two elements were swapped by inner loop, then break 

        if (!isSwapped) {
            break;
        }
    }
    console.log(arr)
}