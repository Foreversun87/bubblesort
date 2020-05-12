function sound(freq) {
  // const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  // // create Oscillator node
  // const oscillator = audioCtx.createOscillator();
  // oscillator.connect(audioCtx.destination);


  // oscillator.start();
  // oscillator.frequency.value = freq;
  // // oscillator.detune.setValueAtTime(100, audioCtx.currentTime); // value in cents

  // setInterval(() => {
  //   oscillator.stop();
  // }, 40);
}

function choice(arr) {
  let randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

function ranValues(n) {
  let arrayValues = []
  for (let index = 0; index < n; index++) {
    let randomValue = Math.ceil(Math.random() * 100);
    arrayValues.push(randomValue);

  }
  return arrayValues;
}




function bubbleSort(zahl, timer) {
  // Dieses Array wird mit einzelnen Schritten befüllt
  let einzelSchritteArray = [];
  //passed by reference >> einzelSchrittArray erhält die Werte von zahl jedoch nicht die Referenzen
    // Umgehung durch [].concat() oder auch {...zahl} bei Objekten
  //Wichtig
  einzelSchritteArray.push([].concat(zahl));
  let sortiert = false;
  do {
    sortiert = true;
    for (let i = 0; i < zahl.length; i++) {
      if (zahl[i] > zahl[i + 1]) {
        sortiert = false;
        let puffer = zahl[i];
        zahl[i] = zahl[i + 1];
        zahl[i + 1] = puffer;
        einzelSchritteArray.push([].concat(zahl));
      } 
    }
  } while (!sortiert);
  // console.log(einzelSchritteArray);
  return einzelSchritteArray;
}

function bubbleSortFirstStep(zahl, timer) {
  // Dieses Array wird mit einzelnen Schritten befüllt
  let einzelSchritteArray = [];
  //passed by reference >> einzelSchrittArray erhält die Werte von zahl jedoch nicht die Referenzen
    // Umgehung durch [].concat() oder auch {...zahl} bei Objekten
  //Wichtig
  einzelSchritteArray.push([].concat(zahl));
  let sortiert = false;
  do {
    sortiert = true;
    for (let i = 0; i < zahl.length; i++) {
      if (zahl[i] > zahl[i + 1]) {
        sortiert = false;
        let puffer = zahl[i];
        zahl[i] = zahl[i + 1];
        zahl[i + 1] = puffer;
        einzelSchritteArray.push([].concat(zahl));
      } 
    }
  } while (!sortiert);
  // console.log(einzelSchritteArray);
  return einzelSchritteArray[0];
}

// console.log(typeof(bubbleSortFirstStep([51, 26, 50, 70, 40])));

export { choice, bubbleSort, bubbleSortFirstStep, ranValues, sound };
