export const digitalRoot = (n:number):number => {
    const num : string = n.toString();
    let sum : number = 0;
    for(let i = 0; i <num.length; i ++){
      sum += parseInt(num[i]);
    }
    if(sum.toString().length>1){
      return digitalRoot(sum)
    }else {
      return sum;
    }
  };