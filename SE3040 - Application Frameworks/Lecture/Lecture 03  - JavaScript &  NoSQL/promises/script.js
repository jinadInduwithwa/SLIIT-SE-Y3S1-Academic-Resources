//------------------ method 1 - using promises constructor -----------------------
/*
const generateNumber = new Promise((resolve,reject)=> {
    const randnumber = Math.floor(Math.random()*10)
    if (randnumber >= 5) {
        resolve("The number is "+ randnumber)
    }else{
        reject("Error : number is less than 5")
    }
})

generateNumber
    .then(result => {
        console.log(result)
    })
    .catch(error => {
        console.log(error)
    })
*/

//------------------ method 1 - define function that return promises  -----------------------
/*
function generateNumber(){
    return new Promise((resolve,reject)=> {
        const randnumber = Math.floor(Math.random()*10)
        if (randnumber >= 5) {
            resolve("The number is "+ randnumber)
        }else{
            reject("Error : number is less than 5")
        }
    })
}

generateNumber()
    .then(result => {
        console.log(result)
    })
    .catch(error => {
        console.log(error)
    })
*/


function getData(key){
    return new Promise((resolve, reject)=> {
        console.log("getting data .............");
        setTimeout(()=>{
            if(key == "K001"){
                const rowData = "row data"
                resolve(rowData)
            }else{
                reject("Invalid key")
            }
        },1000);
    })
}

function processData(rowdata){
    return new Promise((resolve, reject)=> {
        console.log("processing data .............");
        setTimeout(()=>{
            const processData = rowdata + "is processed"
            resolve(processData);
        },1000);
    })
}

function formatedData(processData){
    return new Promise((resolve, reject) => {
        console.log("formatting data .............");
        setTimeout(()=>{
            const formatedData = processData + " and Formated"
            resolve(formatedData)
        },1000);
    })
}

getData("K001")
    .then((result)=>{
        return processData(result);
    })
    .then((result)=>{
        return formatedData(result);
    })
    .then((result)=>{
        console.log("Displaying :",result);
    })
    .catch((error) => {
        console.log(error);
    })


