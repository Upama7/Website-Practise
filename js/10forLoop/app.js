// const subreddits = ['cringe', 'books', 'chickens', 'funny', 'pics', 'soccer']


// //for loop
// for (let i = 0; i < subreddits.length; i++) {
//     console.log(`Visit reddit.com/r/${subreddits[i]}`)
// }


// //for...of loop
// for (let sub of subreddits) {
//     console.log(sub)
// }



// //for...of loop
// for (let subreddit of subreddits) {
//     console.log(`Visit reddit.com/r/${subreddit}`)
// }




//nested loop for ... of
const seatingChart = [
    ['Kristen', 'Erik', 'Namita'],
    ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
    ['Yuma', 'Sakura', 'Jack', 'Erika']
]

for (let i = 0; i < seatingChart.length; i++) {
    const row = seatingChart[i];
    for (let j = 0; j < row.length; j++) {
        console.log(row[j]);
    }
}



for (let row of seatingChart) {
    for (let student of row) {
        console.log(student);
    }
}




//string for ...of
for (let char of "hello World") {
    console.log(char);
}