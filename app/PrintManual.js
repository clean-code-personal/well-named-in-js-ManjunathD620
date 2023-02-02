const colorCode = require('./ColorCode');

// We can use exiting functions to generate Manual i.e `getColorFromPairNumber` and `getPairNumberFromColor`
function printManual(){
    for(let i =0;i<colorCode.MajorColorNames.length;i++){
        for(let j =0;j<colorCode.MinorColorNames.length;j++){
            console.log(`MajorColor:${colorCode.MajorColorNames[i]}, MinorColor:${colorCode.MinorColorNames[j]} and Pair Number: ${(i*colorCode.MinorColorNames.length)+(j+1)}`)
        }
    }
}

module.exports = printManual;
