function function_1(callback){
    console.log("this is function 01");
    callback();
}

function function_2(){
    console.log("this is function 02");
}

function function_3(){
    console.log("this is function 03");
}

function_1(function_2);