/******************************************************
 JSのコンストラクタの仕組み
 ******************************************************/

//JavaScriptのコンストラクタをnewで呼び出すとき、以下のように作用する
var Person = function(name){

    //thisオブジェクトがオブジェクトリテラルで初期化され
    //var this = {};

    this.name = name;
    this.say = function () {
        return "I am" + this.name;
    };

    //プロパティを付与されたthisをreturnする
    //return this;
};

//コンストラクタ内で明示的にオブジェクトを返す場合、
//newを呼んだらthisではなくそのオブジェクトを返す
var ObjectMaker = function () {

    this.name = "This is it.";

    //this以外のオブジェクトを返す
    var that = {};
    that.name = "And that is that.";
    return that;
};

var objMaker = new ObjectMaker();
console.log(objMaker.name); //And that is that.


/******************************************************
 newを忘れてコンストラクタを呼んだ場合
 ******************************************************/

//newを忘れてコンストラクタを呼び出した場合、
//コンストラクタ内のプロパティはthisのプロパティとならず、
//グローバル変数となってしまう...
//(実装による。ECMA5のstrictモードだと、グローバルオブジェクトをささなくなるとか)
var person = Person();
//console.log(typeof person); //undefined
//console.log(name);          //undefined
//console.log(person.name);   //undefined


/******************************************************
 自己呼び出しコンストラクタパターン
 ******************************************************/

var Waffle = function () {
    //new無しで呼んでしまった場合にでも、newして返すようにしてやる
    //(argumentオブジェクトのcalleeプロパティで、対象の関数名を取れる。
    // なので、ここでのarguments.calleeはWaffleを指す。)
    if(! (this instanceof arguments.callee)){
        return new arguments.callee;
    }
    this.tastes = "yummy.";
};

var waffle1 = new Waffle(),
    waffle2 = Waffle();         //newなしでコンストラクタを読んでしまった...

console.log(waffle1.tastes);
console.log(waffle2.tastes);    //yummy.(パターンが効いてる)

