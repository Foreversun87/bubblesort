export default function bogosort(arr){
    var isSorted = function(arr){
        for(var i = 1; i < arr.length; i++){
            if (arr[i-1] > arr[i]) {
                return false;
            }
        }
        return true;
    };

    function shuffle(arr, einzelschritt){
        let count = arr.length, temp, index;
        while(count > 0){
            index = Math.floor(Math.random() * count);
            count--;
            temp = arr[count];
            arr[count] = arr[index];
            arr[index] = temp;
            einzelschritt.push([...arr]);
        }
        return [arr, einzelschritt];
    }

   function sort(arr){
        var sorted = false;
        let einzelschritt = [];
        while(!sorted){
            [arr, einzelschritt] = shuffle(arr, einzelschritt);
            sorted = isSorted(arr);
        }
        return einzelschritt;
    }

    return sort(arr);
}

// // var arra = [3, 0, 2, 5, -1, 4, 1, 3, 0, 2, 5, -1, 4, 1]; 
// // var arra = [3, 0, 2, 5, -1, 4, 1]; 
// var arra = [30, 15, 90, 14]; 
// // console.log("Original Array Elements"); 
// // console.log(arra); 
// // console.log("Sorted Array Elements"); 
// console.log(Bogosort(arra));