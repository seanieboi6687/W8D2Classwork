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

Array.prototype.twoSum = function(){
    let result = [];
    this.forEach((ele1, idx1)=>{
        let pair=[];
        this.forEach((ele2, idx2)=>{
            if (idx2>idx1){
                if (ele1+ele2===0){
                   let pair = [idx1,idx2];
                   result.push(pair);
                }
            }

        });
    });
    return result;

};

console.log([-1, 0, 2, -2, 1].twoSum());
