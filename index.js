function one_hundred_doors(doors) {
    let doorsArr = Array(doors).fill(false);
    let step = 1;
    while (step <= doorsArr.length) {
        for (i = step - 1; i < doorsArr.length; i+= step) {
            doorsArr[i] = toggle(doorsArr[i]);
        }
        step += 1;
    }
    for (let i = 0; i < doorsArr.length; i++) {
        if (doorsArr[i] === true) {
            doorsArr[i] = 1;
        } else {
            doorsArr[i] = 0;
        }
    }
    return doorsArr.join(',');
}

const toggle = function(item) {
    if (item) { // do not need to check if bool due to arg
        return false;
    } else {
        return true;
    }
}


const result = one_hundred_doors(4);
console.log(result)
