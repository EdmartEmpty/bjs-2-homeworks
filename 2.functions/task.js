function getArrayParams(...arr) {
 let  min = Math.min(...arr); 
  let max = Math.max(...arr);
  let avg = arr.reduce((x,y) => x + y)/arr.length;
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
 let  min = Math.min(...arr); 
  let  max = Math.max(...arr);
   return max - min;
}

function differenceEvenOddWorker(...arr) {
  if (arr.length === 0){
    return 0;
  }
   let sumEven = arr.filter( x => x%2 === 0).reduce((x,y) => x + y);
   let sumOdd = arr.filter( x => x%2 !== 0).reduce((x,y) => x + y);
   let result = sumEven - sumOdd;
  return result;
}

function averageEvenElementsWorker(...arr) {
  if (arr.length === 0){
    return 0;
  }
 let countItems = arr.filter( x => x%2 === 0);
  return  countItems.filter( x => x%2 === 0).reduce((x,y) => x + y)/countItems.length;
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
    for(let i = 0; i < arrOfArr.length; i++){
      const funcResult = func(...arrOfArr[i]);
        if( funcResult > maxWorkerResult){
            maxWorkerResult = funcResult;
        }
    }
    return maxWorkerResult;
    }