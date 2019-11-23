/** Return a random item from a list. */

function choice(arr) {
  let randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

function values(){
  return [26, 85, 70, 28, 63, 57, 98, 53, 10, 3, 23 , 111, 1, 33, 200, 4, 500, 250, 140, 34, 22, 99, 0, -1, 22, 56,77];
}

function bubbleSort(zahl){
    let sortiert = false;
    let n = zahl.length;
    console.log("Array:  ",zahl);
    do {
        
        // Ausgabe
        // for (let y : zahl) {
        //     System.out.print(y + ",");
        // }
        // System.out.println("");
        zahl.forEach(e => {
          console.log(e);
        });
        
        sortiert = true;
        for (let i = 0; i < n - 1; i++) {
            if (zahl[i] > zahl[i+1])
            {
                sortiert = false;
                let puffer = zahl[i];
                
                zahl[i] = zahl[i+1];
                zahl[i+1] = puffer;
            }
        }
    }while(!sortiert);

    return zahl;
    
    
   
    
}

// function* idMaker(zahl) {
//   let counter = 0;
//     while(counter < zahl.length){
//       yield zahl[counter];
//       counter += 1;
//     }
// }



export { choice, values, bubbleSort };
