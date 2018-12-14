var addSum = function(a,b){
    var sum = a + b
    return function(c = 0){
        sum += c;
        return sum;
    }
}
var x = addSum(1,2)