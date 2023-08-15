const callback = function(num) {
    return ++num;
 };

Array.prototype.myEach = function(callback){
    this.forEach((ele)=>{
        console.log(callback(ele));
    });
};

;

console.log([0, 1, 2].myEach(callback));


Array.prototype.myMap = function(callback){
    let result = []
    this.forEach((ele) => {
        result.push(callback(ele));
    });

    return result;
};

console.log([2, 3, 4, 5].myEach(callback));
