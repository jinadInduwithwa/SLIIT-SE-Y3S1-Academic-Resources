function getData(key, callback){
    console.log("getting data .............");
    setTimeout(()=>{
        if(key == "K001"){
            const rowData = "row data"
            callback(null, rowData)
        }else{
            callback("invalid key", null)
        }
    },1000);
}

function processData(rowdata, callback){
    console.log("processing data .............");
    setTimeout(()=>{
        const processData = rowdata + "is processed"
        callback(null, processData);
    },1000);
}

function formatedData(processData, callback){
    console.log("formatting data .............");
    setTimeout(()=>{
        const formatedData = processData + " and Formated"
        callback(null, formatedData)
    },1000);
}

getData("K001", function(error, rowData){
    if (error) {
        console.log(error)
    }else{
        processData(rowData, function(error, processData){
            if (error) {
                console.log(error)
            }else{
                formatedData(processData, function(error, formatedData){
                    if (error) {
                        console.log(error)
                    }else{
                        console.log("displaying ..........")
                        console.log(formatedData)
                    }
                })
            }
        })
    }
})