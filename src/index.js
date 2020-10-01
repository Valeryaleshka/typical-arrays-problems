
exports.min = function min (array) {
    if( !array || (array.length < 1)){
        return 0;
    }
    var min = array[0];
    for( var i = 0; i < array.length; i++ ){
        if(array[i]<min){
            min = array[i];
        }
    }
    return min;
}

exports.max = function max (array) {

    if( !array || (array.length < 1)){
        return 0;
    }
    var max = array[0];
    for( var i = 0; i < array.length; i++ ){
        if(array[i]>max){
            max = array[i];
        }
    }
    return max;
}

exports.avg = function avg (array) {
    if( !array || (array.length < 1)){
        return 0;
    }
    
    var sum = 0;
    for( var i = 0; i < array.length; i++ ){
        sum += parseInt( array[i], 10 );
    }
    
    return sum/array.length;
}
