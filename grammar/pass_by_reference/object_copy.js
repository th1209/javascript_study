/******************************************************
 オブジェクトのコピーも参照渡しになる
 ******************************************************/

//クラス定義
var Nyanko = function(type){
    this.type = type;

    // this.setType = function(type){
    //     _type = type;
    // }
    //
    // this.getType = function(){
    //     return _type;
    // }
};
Nyanko.prototype.setType = function(type){
    this.type = type;
};
Nyanko.prototype.getType = function(){
    return this.type;
}

//デフォルトは参照渡し
var siro = new Nyanko("white");
var kuro = siro;
kuro.setType("black");
console.log(kuro);
console.log(siro.getType());    //白猫が黒猫に！

//値渡しするには...
//ES6時点だと、標準でオブジェクトをコピーする方法は存在しないようだ...。
//色々な記事に書いてある、JSON.parse(JSON.stringify())やObject.assign()を使う方法は間違いなので注意。
//(メソッドが破壊される、Object型に変換されるなどの挙動を確認。)
//http://qiita.com/seihmd/items/74fa9792d05278a2e898

