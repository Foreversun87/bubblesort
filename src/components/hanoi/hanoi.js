//Globale Variablen
let anzahl = 5;
let array = [[anzahl, 0, 0]];
let count = 0;

function hanoi(quelle, ziel, puffer, n) {
    if (n === 1) {
        if (quelle === "Links" && ziel === "Rechts") {
            let a = [...array[count]]
            a[0]--;
            a[2]++;
            array.push([].concat(a));
            count = count + 1;
        }
        else if (quelle === "Links" && ziel === "Mitte") {
            let a = [...array[count]]
            a[0]--;
            a[1]++;
            array.push([].concat(a));
            count = count + 1;
        } else if (quelle === "Rechts" && ziel === "Mitte") {
            let a = [...array[count]]
            a[2]--;
            a[1]++;
            array.push([].concat(a));
            count = count + 1;
        } else if (quelle === "Rechts" && ziel === "Links") {
            let a = [...array[count]]
            a[2]--;
            a[0]++;
            array.push([].concat(a));
            count = count + 1;
        } else if (quelle === "Mitte" && ziel === "Links") {
            let a = [...array[count]]
            a[1]--;
            a[0]++;
            array.push([].concat(a));
            count = count + 1;
        } else if (quelle === "Mitte" && ziel === "Rechts") {
            let a = [...array[count]]
            a[1]--;
            a[2]++;
            array.push([].concat(a));
            count = count + 1;
        }
    } else {
        hanoi(quelle, puffer, ziel, n - 1);
        hanoi(quelle, ziel, puffer, 1);
        hanoi(puffer, ziel, quelle, n - 1);
    }
}

hanoi("Links", "Mitte", "Rechts", anzahl);
export default array;