var numSheep = 4;
var monthsToPrint = 12;

for (var monthNumber = 1; monthNumber <= monthsToPrint; monthNumber++) {

  if(monthNumber %4==0){
    var extraSheep = numSheep *.75;
    console.log("Removing " + extraSheep + " sheep from the population.");
    numSheep -= extraSheep;
  }
  else if(numSheep>10000){
    numSheep *= .5;
    console.log("Removing " + numSheep + " sheep from the population.");
  }

  numSheep *= 4;
  console.log("There will be " + numSheep + " sheep after " + monthNumber + " month(s)!");
}