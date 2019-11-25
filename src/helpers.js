// async function sound(freq){
  
//   const audioCtx = new (window.AudioContext || window.webkitAudioContext)();  
//     // create Oscillator node
//   const oscillator = audioCtx.createOscillator();
//   oscillator.connect(audioCtx.destination);
  
  
//   oscillator.start();
//   oscillator.frequency.value = freq;
//   // oscillator.detune.setValueAtTime(100, audioCtx.currentTime); // value in cents
  
//   setTimeout(() => {
//     oscillator.stop();  
//   }, 100);
// }

function choice(arr) {
  let randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

function values(){
  // return [26, 85, 70, 28, 63, 57, 98, 53, 10, 3];
  return [26, 85, 70, 28, 63, 57, 98, 53, 10, 3, 23 , 111, 1, 33, 200, 4, 500, 250, 140, 34, 22, 99, 0, 11, 22, 56,77, 31, 333, 555,72, 319, 239, 6, 7, 8, 81, 54, 399, 211
    , 32, 47, 275, 197, 209, 111,222,333,444,29,74];
}


function ranValues(n){
  let arrayValues = []
  for (let index = 0; index < n; index++) {
    let randomValue = Math.floor(Math.random() * n);
    arrayValues.push(randomValue);
    
  }
  return arrayValues;
}

function bubbleSort(zahl){
    let sortiert = false;
    let n = zahl.length;
    let einzelSchritt = zahl;
    let einzelSchrittPuffer = zahl.slice();
    let einzelSchritteArray = [];
    do {
      
      // Ausgabe
      // zahl.forEach(e => {
        //   console.log(e);
        // });
        //  console.log(einzelSchritt);
        einzelSchritteArray.push(einzelSchrittPuffer);
        // console.log(einzelSchritteArray);
        
        sortiert = true;
        for (let i = 0; i < n - 1; i++) {
          if (einzelSchritt[i] > einzelSchritt[i+1])
          {
            sortiert = false;
            let puffer = einzelSchritt[i];
            
            einzelSchritt[i] = einzelSchritt[i+1];
            einzelSchritt[i+1] = puffer;
          }
        }
        einzelSchrittPuffer = einzelSchritt.slice();
      }while(!sortiert);
      
    // console.log("Array:  ",einzelSchritteArray);
    return einzelSchritteArray;
}

export { choice, values, bubbleSort, ranValues };
