/******************************************************
 高階関数と匿名関数
 ******************************************************/

//高階関数(関数を引数に取る関数) -> 前後の処理を汎化したい時に使える
function arrayWalk(data,f){
    for(var key in data){
        f(key,data[key]);
    }
}

var data = [1,2,4,8,16];

//高階関数使う時は、一緒に匿名関数を使うと便利
//(2回以上使う処理なら、通常の関数として定義するのがベター)
arrayWalk(
    data,
    function(key, value){console.log(key + ':' + value);}
);


/******************************************************
 クロージャ
 ******************************************************/

//1.クロージャってどんなの?
//例えば、以下関数内部における、無名関数がクロージャと呼ばれるもの
function closureSample(init){
    //1.必ずプロパティチックなローカル変数があり
    var counter = init;

    //2.returnで無名関数を使う
    return function(){
        return ++counter;
    };
}

var myClosure = closureSample(1);
console.log(myClosure());//2
console.log(myClosure());//3

//2.クロージャの用途
//軽量なオブジェクトといった所。
//「メソッドが一つしか無い」「プロパティに対し、必ず同じ処理を加える」等の場合、オブジェクトの代わりにクロージャが使える。

//3.クロージャの仕組み
//「匿名関数を使っているので、一度しかスコープチェーンが生成されない -> だから関数内ローカル変数が使い回される」
//という仕組みになっているらしい。スコープチェーンについては、『JavaScript本格入門』を参照すること。

