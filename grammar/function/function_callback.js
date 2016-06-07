/******************************************************
 コールバックパターンが無い場合...
 ******************************************************/

//例えば、以下のような2つの関数を使う場合を考える...。
var findNodes = function () {
    var i = 100000,
        nodes = [],
        foundNode;
    while (i){
        i -= 1;
        //複雑なロジック...
        nodes.push(foundNode);
    }
    return nodes;
};

var hide = function (nodes) {
    var i = 0, max = nodes.length;
    for (; i < max; i += 1) {
        nodes[i].style.display = "none";
    }
};

//呼び出し側はこんな感じ。この実装は、どう考えても無駄。
//100000回ループ + 見つかったnode分のループが行われるから。
hide(findNodes);


/******************************************************
 コールバックパターンの導入例
 ******************************************************/

//こんな感じで、コールバック関数を引数に取るようにすれば、
//ループの回数を100000回に押さえることができ、効率的なコードに！
var findNodes = function (callback) {
    var i = 100000,
        nodes = [],
        foundNode;

    //引数チェック
    if (typeof callback !== "function"){
        callback = false;
    }

    while (i){
        i -= 1;
        //複雑なロジック...
        if(callback){
            callback(foundNode);
        }
        nodes.push(foundNode);
    }
    return nodes;
};

var hide = function (nodes) {
    var i = 0, max = nodes.length;
    for (; i < max; i += 1) {
        nodes[i].style.display = "none";
    }
};

findNodes(hide);


/******************************************************
 メソッドに対しコールバックパターンを使うには?
 ******************************************************/
//TODO 後でcallメソッドの実装に言及する

//こんな感じのオブジェクトがあったとする。
//paintメソッド内でプロパティを使っているため、paintメソッドはコールバック関数として使うことはできない!
var myapp = {};
myapp.color = "green";
myapp.paint = function (node) {
    node.style.color = this.color;
};

//そんな時は、コールバック関数を引数に取る時に、オブジェクトも併せて取るようにする
var findNodes = function (callback, callback_obj) {
    var i = 100000,
        nodes = [],
        foundNode;

    //引数チェック
    if (typeof callback !== "function"){
        callback = false;
    }

    while (i){
        i -= 1;
        //複雑なロジック...
        if(callback){
            callback.call(callback_obj, callback);
        }
        nodes.push(foundNode);
    }
    return nodes;
};


/******************************************************
 コールバックパターンのその他例
 ******************************************************/

//非同期イベントリスナ
document.addEventListener("click", console.log, false);

//タイムアウト時に発火する
var thePlotThickens = function () {
    console.log('500ミリ秒後...');
};
setTimeout(thePlotThickens, 500);
