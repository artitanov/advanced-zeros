module.exports = function getZerosCount(number, base) {
    let arrOfBase = [];
    let finalDivide = [0];
    let countOfFinalDivide = [0];
    let variableOfNulls = [];
    k = 1;
    let cons = 0;
    for(let i = 2; i <= base; i++){
      
      while(base % i == 0 && base > 1){
        arrOfBase.push(i);
        Divider = i;
        if (finalDivide[k-1]< Divider) {++k; finalDivide.push(Divider); countOfFinalDivide[k-1] = 1; cons = 0;};
        if (finalDivide[k-1]= Divider) {cons++; countOfFinalDivide[k-1] = cons;};
        base = base / i;
      }
        if(base/i == 1){
          arrOfBase.push(base);
        }
      }
    let x = number;
    sumOfNulls = 0;
      for (let l = 1; finalDivide.length > l; l++){
        while (x >= finalDivide[l]) {
          x = Math.floor(x / finalDivide[l]); 
          sumOfNulls = sumOfNulls + x;};
          variableOfNulls[l-1] = sumOfNulls;
          variableOfNulls[l-1] = Math.floor(variableOfNulls[l-1] / countOfFinalDivide[l]);
          x = number;
          sumOfNulls = 0;
        };
    return Math.min(...variableOfNulls);
}