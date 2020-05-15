const toggle = function(item) {
    if (item === 0) {
        return 1;
    } else {
        return 0;
    }
}

function closeOpenDoors(doors) {
    let arrayDoor = Array(doors).fill(0);
    let step = 1;
    while (step <= arrayDoor.length) {
        for (i = step - 1; i < arrayDoor.length; i+= step) {
          console.log(arrayDoor[i])
            arrayDoor[i] = toggle(arrayDoor[i]);
        }
        step += 1;
    }
    console.log(arrayDoor)
    // for (let i = 0; i < arrayDoor.length; i ++) {
    //     if (arrayDoor[i] === true) {
    //         arrayDoor[i] = 1;
    //     } else {
    //         arrayDoor[i] = 0;
    //     }
    // }
    console.log(arrayDoor)
    return arrayDoor.join('');

}


const test = closeOpenDoors(101);
console.log(test)


const test1 = splitArray1([1, 3, 2, 7, 6, 6, 3]);
console.log(test1)


function splitArray1(items) {
  if(items.length ===0) {
    return []
  }
  const arraySorted = this.sortArray(items);
  console.log(arraySorted)
  const outputArray = arraySorted.reduce((initValue, item) => {
    const lastSubArray = initValue[initValue.length - 1];
    console.log(lastSubArray)
    if (!lastSubArray || item - lastSubArray[lastSubArray.length - 1] >= 2) {
      initValue.push([]);
    }
    initValue[initValue.length - 1].push(item);
    return initValue;
  }, [])
  return outputArray;
}

function sortArray(array) {
  return array.sort((itemA, itemB) => {
    return itemA - itemB;
  }) 
}

  