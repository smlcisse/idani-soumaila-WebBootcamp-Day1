function calculateSum (input){          
    var sum =  0;
    for(var i=0;i<input.length;i++)
    {                  
        if(isNaN(input[i])){
            continue;
        }
        sum = sum + Number(input[i]);
    }
        return sum;
}
module.exports = {
    calculateSum
}
