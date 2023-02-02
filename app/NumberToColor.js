const colorCode = require('./ColorCode');
let ColorPair = require('./pair');
function getColorFromPairNumber(pairNumber)
{
	let minorSize = colorCode.MajorColorNames.length;
	let majorSize = colorCode.MinorColorNames.length;
	
	if (pairNumber < 1 || pairNumber > minorSize * majorSize)
 	{
 		throw `Argument PairNumber:${pairNumber} is outside the allowed range` 
	}
	let zeroBasedPairNumber = pairNumber - 1;
    let majorIndex = parseInt (zeroBasedPairNumber / minorSize);
    let minorIndex = parseInt(zeroBasedPairNumber % minorSize);
	let  pair = new ColorPair();
	pair.majorColor = colorCode.MajorColorNames[majorIndex];
	pair.minorColor = colorCode.MinorColorNames[minorIndex];
	return pair;
}

module.exports = getColorFromPairNumber;