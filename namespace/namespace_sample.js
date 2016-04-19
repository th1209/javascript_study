/******************************************************
 空のオブジェクトを名前空間の代わりに使う方法
 『JavaScript 本格入門』
 ******************************************************/

//空のオブジェクトを名前空間代わりに使う
var Mylib = function(){};

//各クラスは、空のオブジェクトのプロパティ。
Mylib.Person = function(name,sex,age){
    this.name = name;
    this.sex = sex;
    this.age = age;
};

Mylib.Person.prototype = {
    say : function(){
        return 'Hello !';
    },
    sleep : function(){
        return 'Zzz...';
    },
};

//使う時はこんな感じ。名前空間の記述を省けないのが悪い所。
var person = new Mylib.Person('太郎',20,'male');
console.log(person.say());


/******************************************************
 モジュールコンテナ?????
 『JavaScriptパターン』
 http://qiita.com/KENJU/items/0d8f85df205ea4978508
 ******************************************************/
