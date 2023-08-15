const cb = function(num) {
    return ++num;
 };

const newCallback = function(arr, num){
    arr.push(num);
};

Array.prototype.myEach = function(func){
    for (let i = 0; i < this.length; i++){
        func(this[i]);
    };
};

[0, 1, 2].myEach(cb);

// class Array
//     def my_each(prc)
//         i = 0
//         while i < self.length
//             prc.call(self[i])
//             i+=1
//         end
//     end
// end

// add_one = Proc.new { |ele| ele + 1 }
// [1,2,3].my_each(add_one)

// [1,2,3].map do |ele|
//     ele += 1
// end

// def my_map(prc)
//     res = [];
//     self.my_each do |ele|
//         res << prc.call(ele)
//     end
//     res
// end


Array.prototype.myMap = function(callback){
    let result = [];
    const func = function(num){
        result.push(callback(num))
    };
    this.myEach(func);
    return result;
};

console.log([2, 3, 4, 5].myMap(cb));

const acc = function(num){
    val += num
};

Array.prototype.myReduce = function(cb, val=0){
    val ||= this[0]
    let arr = [];
    if (val === this[0]){
        arr = this.slice(1);
    }
    else{
        arr = this;
    };

    arr.myEach(cb);
    return val;
}

console.log([2, 3, 4, 5].myReduce(acc));
