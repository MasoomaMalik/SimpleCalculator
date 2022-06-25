
var op
 
var newEntry = false;;
var exp = "";


function setValue(num) {
    var disp = document.getElementById('floatingInput')
    var localnum = num;
    //    equal k bad inputscreen refresh
    if (newEntry == true) {
        disp.value = ""
        newEntry = false;
    }
    // first char cant be multiply or dviide or percent
    if((localnum== "x" || localnum=="%"  || localnum== "/")   )
{
    if(exp==""){
    disp=""
    localnum=""
   

    }
}    
if (localnum == "/") {
    num= "\u00F7"
    console.log("exp"+exp)
   
}
    disp.value += num;
    //   x ko * main change 
    if (localnum == "x") {
        localnum = "*"
    }
    // / ko uske html m change kro
    
    if ((localnum == "+" || localnum == "-" || localnum == "/" || localnum == "*" || localnum == '-')) {
        if ((exp.charAt(exp.length - 1) == "+" || exp.charAt(exp.length - 1) == "-" || exp.charAt(exp.length - 1) == "/" || exp.charAt(exp.length - 1) == "*" || exp.charAt(exp.length - 1) == '-')) {
            // console.log(localnum)
            localnum = ""
            // console.log(localnum)
            // agr do same opertor to previously stored ajae
                       exp = exp.replace("*", "x")
                       exp = exp.replace("/", "\u00F7") 
            disp.value = exp;
        }
    }
    exp = exp.replace("x", "*")
    exp = exp.replace( "\u00F7", "/") 
    exp += localnum;
    console.log("exp" + exp)
}
function getResult() {

    var disp = document.getElementById('floatingInput')
    

if(exp.charAt(exp.length-1)=="%")
{
    console.log("mai yah")
    disp.value=exp.slice(0,exp.length-1)/100;
}
else{
    disp.value = eval(exp)
}

    
    exp = ""
    newEntry = true;


}

function clearMe() {
    // var disp=document.getElementById('floatingInput')
    var disp = document.getElementById('floatingInput')
    disp.value = ""
    exp = ""
    // console.log(disp.value)
    // disp.value=eval(exp)

}

function delOne()
{
    exp=exp.slice(0,exp.length-1)
    exp = exp.replace("*", "x")
    document.getElementById('floatingInput').value=exp
    console.log(exp)
}