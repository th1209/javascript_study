/******************************************************
 参照渡し
 以下URLがとても詳しい
 http://qiita.com/migi/items/3417c2de685c368faab1
 ******************************************************/

//JavaScriptでは、プリミティブ型以外は、全て参照渡しとなるので注意
//プリミティブ型:数値型、文字列型、ブーリアン型、null型、undefined型
var odds = [1,3,5,7];

function popElement(elements){
    elements.pop();
    return elements;
}

console.log(popElement(odds));
console.log(odds);  //[1,3,5]


/******************************************************
 引数チェックとデフォルト引数
 ******************************************************/

function triangle(base,height){

    //個数チェックはargumentsオブジェクトで
    if(arguments.length < 1){
        throw new Error ('Argument num is invalid.');
    }

    //デフォルト引数はこんな感じで
    if(height === undefined){
        height = 1;
    }

    return base * height / 2;
}

try{
    console.log(triangle());
}catch(exception){
    console.log(exception.message);
}
console.log(triangle(10));


/******************************************************
 可変長引数
 ******************************************************/

//可変長引数も、argumentオブジェクトで実現できる
function sum(){
    var sum = 0
    for(var i = 0; i < arguments.length; i++){
        if(isNaN(arguments[i])) throw new Error('Arguments type is wrong.');
        sum += arguments[i];
    }
    return sum;
}

console.log(sum(1,2,3));


/******************************************************
 再帰
 ******************************************************/

//argumentsオブジェクトのcalleeプロパティを使う
function factorial(n){
    if(n > 1) return (n * arguments.callee(n - 1));
    return 1;
}

console.log(factorial(5));

