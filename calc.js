function cal() {
    var bill = document.getElementById("bill").value;
    var num1 = document.getElementById("num").value;

    var tip1;
    var services = document.getElementById("service");
    var tip;
    if(services.value=="exc"){
        tip=20/100*bill;
    }
    else{
        if(services.value=="med"){
            tip=10/100*bill;
        }
        else{
            if(services.value=="not"){
                tip=5/100*bill;
            }
        }
        
    }
     tip1 = tip/num1;

     document.getElementById("show").value=tip1;
     console.log(tip1);


}

function reset() {
    document.getElementById("bill").value="";
    document.getElementById("num").value="";
    document.getElementById("show").value="";
}