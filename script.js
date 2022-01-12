// script for tip calculator
function calculateTip(){
    var billAmount = document.getElementById("billAmount").value;
    var serviceQuality = document.getElementById("serviceQuality").value;
    var peopleShared = document.getElementById("peopleShared").value;

    if(billAmount === "" || serviceQuality == 0){
        window.alert("Please input values");
        return;
    }

    if(peopleShared === "" || peopleShared == 0){
        peopleShared = 1;
        document.getElementById('each').style.display = "none";
    }else{
        document.getElementById('each').style.display = "block";
    }

    var total = (billAmount * serviceQuality)/peopleShared;
    total = Math.round(total*100)/100;
    total = total.toFixed(2);

    document.getElementById('totalTip').style.display = "block";
    document.getElementById('tip').innerHTML = total;


}

document.getElementById('totalTip').style.display = "none";
document.getElementById('each').style.display = "none";

document.getElementById('calculate').onclick = function(){ calculateTip(); };
