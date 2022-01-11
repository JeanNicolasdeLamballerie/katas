function longest(str: string) {
    const length: number = str.length - 1; // We check for the next index, so we need to remove 1 to the length to avoid checking for a character that doesn't exist.
    let result: string = ""; // longest substring found.
    let temp: string = str[0]; //temporary value of any alphabetical substring.
    let lastIndex: number = 0; //Pointer that we keep, to know if we're continuing a substring or creating a new one. We can't refer to the code itself as the same character can repeat (eg, eaaaabc).



    for (let i = 0; i < length; i++) {

        const code = str.charCodeAt(i);

        const nextCode = str.charCodeAt(i + 1);


        if (code <= nextCode) {
            if (lastIndex !== i) {
                temp = str[i];
            }
            // We are in a substring, so we keep increasing the counter.
            lastIndex = i + 1;
            temp = temp + str[i + 1]
            
        } else if (result.length < temp.length) {
            
            result = temp;
            temp = "";
            // the lastIndex breaks if one character isn't in alphabetical order. Therefore, we know that a new substring would need to be created in the next loop.
        }
    }


    if (temp.length > result.length) {
        result = temp;
    }
    return result;

}