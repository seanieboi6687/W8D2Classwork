Array.prototype.uniq = function (){
    let result = []
    this.forEach((ele) => { 
        if (!result.includes(ele)) {
            result.push(ele)
        };
    });

    return result;
};

console.log([1, 2, 2, 3, 3, 3].uniq())