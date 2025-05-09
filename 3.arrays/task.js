function compareArrays(arr1, arr2) {
   if(arr1.length > arr2.length || arr1.length < arr2.length){
        return false;
    } 
   return arr1.every((element,index) => element === arr2[index]);
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
