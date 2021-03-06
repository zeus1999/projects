Array.prototype.find = function(fn){

    if(this == null){
    throw new TypeError("this is null or not defined");
    }

    var o = Object(this);

    var len = o.length >>> 0;

    if(typeof fn !== "function"){
    throw new TypeError("param must be a function");
    }

    var thisArg = arguments[1];

    var k = 0;

    while(k < len){
    var kValue = o[k];
    if(fn.call(thisArg, kValue, k, o)){
        return kValue;
    }
    k++;
    }

    return undefined;
}