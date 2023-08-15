const callback = function(num) {
    return ++num;
 };

Array.prototype.myEach = function(callback){
    // let result=[]
    this.forEach((ele)=>{
        // result.push(callback(ele));
        console.log(callback(ele));
    });
    // return result;
};

;

console.log([0, 1, 2].myEach(callback));


