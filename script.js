//==================================
//      Coded By UltraCoder™
//==================================

var results = document.querySelector('.result')
var retVal = ''
var digits = ['1','2','3','4','5','6','7','8','9','0']
var operators = ['-','+','%','.']
var spec_operators = ['÷','×']
var controls = ['C','⌫']
$(':button').click(function (event){
	event.preventDefault();
    var key = event.target;
    var key_value = key.value;
    if(digits.includes(key_value)){
        retVal += key_value;
        results.innerHTML=retVal;
    };
    if(controls.includes(key_value)){
        if(key_value=='C'){
            retVal='';
            results.innerHTML=retVal;
        };
        if(key_value=='⌫'){
            retVal = retVal.slice(0, -1);
            results.innerHTML=retVal;
        };
    };
    if(operators.includes(key_value)){
        if(operators.includes(retVal.charAt(results.length-1))){
            retVal = retVal.slice(0, -1);
            retVal += key_value;
            results.innerHTML=retVal;
        } else {
            retVal += key_value;
            results.innerHTML=retVal;
        };
    };
    if(spec_operators.includes(key_value)){
        if(spec_operators.includes(retVal.charAt(results.length-1))){
            retVal = retVal.slice(0, -1)+key_value;
            results.innerHTML=retVal;
        } else {
            retVal += key_value;
            results.innerHTML=retVal;
        };
    };
    if(key_value=='='){
        retVal = retVal.replace('÷', '/');
        retVal = retVal.replace('×', '*');
        calculated = eval(retVal);
        console.log(retVal+'='+calculated)
        if(calculated.length>=17){
            calculated = calculated.slice(0, 16-calculated.length);
            results.innerHTML=calculated;
            retVal='';
        } else {
            results.innerHTML=calculated;
            retVal='';
        };
    };
});