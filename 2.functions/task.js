function getArrayParams(...arr) {
  min = Math.min(...arr); 
   max = Math.max(...arr);
   avg = arr.reduce((x,y) => x + y)/arr.length;
 return { min: min, max: max, avg: +avg.toFixed(2)};
}

function summElementsWorker(...arr) {
  if (arr.length === 0){
    return 0;
  }
  let sum = arr.reduce((x,y) => x + y);
  return sum;
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0){
    return 0;
  }
  min = Math.min(...arr); 
   max = Math.max(...arr);
   return max - min;
}

function differenceEvenOddWorker(...arr) {
  if (arr.length === 0){
    return 0;
  }
  return  arr.filter( x => x%2 === 0).reduce((x,y) => x + y) - arr.filter( x => x%2 !== 0).reduce((x,y) => x + y);
}

function averageEvenElementsWorker(...arr) {
  if (arr.length === 0){
    return 0;
  }
  countItems = arr.filter( x => x%2 === 0);
  return  countItems.filter( x => x%2 === 0).reduce((x,y) => x + y)/countItems.length;
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
    for(let i = 0; i < arrOfArr.length; i++){
        if(func(...arrOfArr[i]) > maxWorkerResult){
            maxWorkerResult = func(...arrOfArr[i]);
        }
    }
    return maxWorkerResult;
    }