function checkBloodGroup() {
    const bloodGroup = document.getElementById('bloodGroup').value.toUpperCase();
    let compatibleGroups = "";
    if(bloodGroup=='A+'){
        compatibleGroups = "A+, A-, O+, O-"
    }else if(bloodGroup=='A-'){
    compatibleGroups = "A-,O-";
    }else if(bloodGroup=='B+'){
    compatibleGroups = "B+, B-, O+, O-";
    }else if(bloodGroup=='B-'){
    compatibleGroups = "B-, O-";
    }else if(bloodGroup=='AB+'){
    compatibleGroups = "A+, A-, B+, B-, AB+, AB-, O+, O-";
    }else if(bloodGroup=='AB-'){
    compatibleGroups = "A-, B-, AB-, O-";
    }else if(bloodGroup=='O+'){
    compatibleGroups = "O+, O-";
    }else if(bloodGroup=='O-'){
    compatibleGroups = "O-";
    }else{
        compatibleGroups = "Invalid blood group. Please enter a valid blood group.'";
    }
    document.getElementById('result').innerText = compatibleGroups;
}
