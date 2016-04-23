var Driver  = function(){
    //他クラスを委譲で保持
    this.stub = new Stub();
};

Driver.prototype.doHoge = function(){
    //委譲しているクラスのメソッドを呼び出す
    this.stub.doHoge();
};
