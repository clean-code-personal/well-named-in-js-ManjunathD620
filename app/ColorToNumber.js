const colorCode = require('./ColorCode');
let ColorPair = require('./pair');
function getPairNumberFromColor(pair) {
    let majorIndex = -1;
    for (let i = 0; i < colorCode.MajorColorNames.length; i++) {
        if (colorCode.MajorColorNames[i] == pair.majorColor) {
            majorIndex = i;
            break;
        }
    }

    let minorIndex = -1;
    for (let i = 0; i < colorCode.MinorColorNames.length; i++) {
        if (colorCode.MinorColorNames[i] == pair.minorColor) {
            minorIndex = i;
            break;
        }
    }

    if (majorIndex == -1 || minorIndex == -1) {
        throw `Unknown Colors:${pair.toString()}`;
    }

    return (majorIndex * colorCode.MinorColorNames.length) + (minorIndex + 1);
}


module.exports = getPairNumberFromColor;