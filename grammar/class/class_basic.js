/******************************************************
 クラス定義
 ******************************************************/

var Member  = function(firstName,lastName){
    //1.プロパティはコンストラクタ内
    this.firstName = firstName;
    this.lastName = lastName;
};

//2.メソッドはプロトタイプに追加する
Member.prototype.getName = function(){
    return this.lastName + ' ' + this.firstName;
};

var mem = new Member('太郎', '佐藤');
console.log(mem.getName());

//以下はNGパターン
// var Member  = function(firstName,lastName){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     //コンストラクタ内にメソッド定義はNG
//     this.getName = function(){
//         return this.lastName + ' ' + this.firstName;
//     }
// };


/******************************************************
 静的メンバ
 ******************************************************/

var Area = function(){};
Area.version = '1.0';
Area.triangle = function(base,height){
    return base * height / 2;
};

console.log(Area.version);
console.log(Area.triangle(10,2));

//以下NG。インスタンスから静的メンバは呼べない。
// var area = new Area();
// console.log(area.triangle());


/******************************************************
 継承
 ******************************************************/

var Animal = function(){};
Animal.prototype.walk = function(){
    return 'トコトコ...';
};

var Dog = function(){};
Dog.prototype = new Animal();
Dog.prototype.bark = function(){
    return 'ワンワン...';
};

var dog = new Dog();
console.log(dog.walk());
console.log(dog.bark());


/******************************************************
 クロージャ/特権メソッド(疑似プライベートメンバを実現)
 ******************************************************/

function Triangle(){
    //疑似プライベートメンバ
    var _base;
    var _height;
    var _checkArgs = function(val){
        return (! isNaN(val) && val > 0);
    }

    //特権メソッド
    this.setBase = function(base){
        if(_checkArgs(base)){_base = base;}
    }
    this.setHeight = function(height){
        if(_checkArgs(height)){_height = height;}
    }
    this.getBase = function(){ return _base; }
    this.getHeight = function(){ return _height; }
};

Triangle.prototype.getArea = function(){
    return this.getBase() * this.getHeight() / 2;
};

var t = new Triangle();
t.setBase(10);
t.setHeight(2);
console.log(t.getArea());
//NG
//console.log(t._base);


/******************************************************
 インタフェース/抽象クラス
 ******************************************************/

//言語仕様としては存在せず。メソッド内で例外を投げるようにすれば近いものが実現できる。
//http://www.yunabe.jp/docs/javascript_class_in_google.html#abstract-interface
var Person = function(name,sex,age){
    this.name = name;
    this.sex = sex;
    this.age = age;
};

Person.prototype.say = function(message){
    throw new Error('Not Implemented');
};

Person.prototype.sleep = function(){
    throw new Error('Not Implemented');
};