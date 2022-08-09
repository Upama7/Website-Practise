
//to print i j k 

// for (let i = 1; i <= 10; i ++) {
//     console.log(`i is: ${i}`);
//     for (let j = 1; j < 4; j++){
//         console.log(`            j is ${j}`);
//         for (let k = 1; k <= 2; k++){
//             console.log(`               ${k}`)
//         }
//     }
// }








const seatingChart = [
    ['Nirdev', 'Upama'],
    ['Samikshya', 'Yoseph', 'Amrita'],
    ['Niraj', 'Mandira', 'Barsha'],
]

for (let i = 0; i < seatingChart.length; i ++) {
    const row = seatingChart[i];
    console.log(`ROW #${i + 1}`); 
    for (let j = 0; j < row.length; j++) {
        console.log(row[j]);
    }
}
