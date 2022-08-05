const arguments = process.argv.slice(2);

function circleAreaCalculator(radius){
    let result = Math.PI * radius * radius;
    console.log("Yarıçapı " + radius + " olan dairenin alanı: " + result*1)
}

circleAreaCalculator(arguments[0]);
