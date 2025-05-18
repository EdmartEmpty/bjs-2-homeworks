//Задача № 1
function cachingDecoratorNew(func) {
  let cache = [];
  const maxCacheValuesCount = 5;
  return (...args) => {
        let hash  = md5(args);
        let ObjectCache = cache.find((object) => object.hash === hash);
        if (ObjectCache) {
 console.log("Из кеша: " + ObjectCache.value);
 return "Из кеша: " + ObjectCache.value;
        } 
      let result = func(...args); 
       cache.push({hash,value:result});
    if(cache.length > 5){
        cache.shift();
    }
    return  "Вычисляем: "+ result;
  };
}


//Задача № 2
function debounceDecoratorNew(func, delay) {
    let timeoutId = null;
    wrapper.count = 0;
    wrapper.allCount = 0;

    function wrapper(...args) {
        wrapper.allCount += 1;
        if (!timeoutId) {
            timeoutId = true;
            wrapper.count++;
            return func.apply(this,args);
        }

            clearTimeout(timeoutId);
          timeoutId = setTimeout(() => { wrapper.count++; func(...args); }, delay);
         
    }

    return wrapper;
}
