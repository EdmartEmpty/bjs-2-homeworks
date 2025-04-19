function compareArrays(arr1, arr2) {
      let len = 0;
    if(arr.length > arr2.length || arr.length < arr2.length){
        return false;
    } else {
        len = arr.length;
    }
    for(let i = 0; i< len; i++){
    if(arr[i] !== arr2[i]){
        return false;
    }
        return true;
}
}

function getUsersNamesInAgeRange(users, gender) {
    if(gender !== "мужской" && gender !== "женский"){
        return 0;
    }
    if(users.length === 0){
        return 0;
    }
   return  users.filter(x => x.gender === gender).map(x => x.age).reduce((x,y) => x + y) / users.filter(x => x.gender === gender).map(x => x.age).length
}
