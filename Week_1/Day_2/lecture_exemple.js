var freq = `-19
+2
+18
+14
-3
-16
-7`;

//the backslsh makes js understand that the string could have lines in its middle too!

var splitted = freq.split('\n');
// console.log('splitted: ', + splitted);

// search how to transform arrays into numbers - first thing you need to do

function addArrayOfNumbers(arrya) { //last thing: transform it into a function after everything is working

var addUp = 0;
// parseFloat(splitted[0]) + parseFloat(splitted[1]) + parseFloat(splitted[2]) // will get each element and transform it to a number and then adding them
// this is the time to experiment it and research about the language
  for (i = 0 ; i < splitted.length ; i++) {
    addUp += parseFloat(splitted[i]);
    // console.log(addUp);
  }
}

console.log('Result Freq: ', addArrayOfNumbers(splitted));

