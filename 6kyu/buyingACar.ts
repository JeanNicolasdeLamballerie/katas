export function nbMonths(startPriceOld: number, startPriceNew: number, savingperMonth: number, percentLossByMonth: number): number[] {
    let months : number = 1;
    let interest : number = percentLossByMonth;
    function calculateValue (oldValue : number, newValue : number, money = 0 ) : any {
      const leftover : number = money+oldValue - newValue;
      if(leftover >=0){
        return [months-1, Math.round(leftover)];
      } 
      
      else {
        if(!(months%2)){
          interest+=0.5;}
        
        const savings = money+savingperMonth;
        const nextMonthOldValue = oldValue - (oldValue*interest/100)
        const nextMonthPriceNew = newValue - (newValue*interest/100)
        months+=1;
        return calculateValue(nextMonthOldValue, nextMonthPriceNew, savings)
        
      }
      
    }
    return calculateValue(startPriceOld, startPriceNew);
  }