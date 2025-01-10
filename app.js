function checkBloodGroup() {
    const bloodGroup = document.getElementById('bloodGroup').value.toLowerCase();
    let compatibleGroups = [];
    console.log(bloodGroup);
    if(bloodGroup=='a+'){
        compatibleGroups = ['A+', 'A-', 'O+', 'O-']
    }else if(bloodGroup=='a-'){
        compatibleGroups = ['A-', 'O-'];
    }else if('a-'){
    compatibleGroups = ['A-', 'O-'];
    }else if('b+'){
    compatibleGroups = ['B+', 'B-', 'O+', 'O-'];
    }
    else if('b-'){
    compatibleGroups = ['B-', 'O-'];
    }
    else if('ab+'){
    compatibleGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
    }
    else if('ab-'){
    compatibleGroups = ['A-', 'B-', 'AB-', 'O-'];
    }
    else if('o+'){
    compatibleGroups = ['O+', 'O-'];
    }
    else if('o-'){
    compatibleGroups = ['O-'];
    }else{
        compatibleGroups = ['Invalid blood group. Please enter a valid blood group.'];
    }
    document.getElementById('result').innerText = compatibleGroups.join(', ');
}
