String.prototype.padEnd = function padEnd(targetLength,padString){
    targetLength = targetLength >> 0;
    padString = String((typeof padString !== "undefined" ? padString : " "));
    if(this.length > targetLength){
        return String(this);
    }
    else {
        targetLength = targetLength-this.length;
        if(targetLength > padString.length){
         padString += padString.repeat(targetLength/padString.length);
        }
        return String(this) + padString.slice(0,targetLength);
    }
};