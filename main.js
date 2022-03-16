// to display numbers
"use strict";
let outPut = document.getElementById('result-output');

function display(num){
    outPut.value +=num;
}


// Erase all the output
"use strict";
function Erase(){
    outPut.value = '';
}

// how to delete the number in a backspace 
"use strict";
function del(){
    outPut.value = outPut.value.slice(0, -1);
}
// output an error when two operators are inserted
"use strict";
function calculate(){
try{
    outPut.value = eval(outPut.value)
}
catch(err)
{
    alert('You have entered two operators at the same time')
}
}
