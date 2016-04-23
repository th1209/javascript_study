/******************************************************
 配列への代入は参照渡しになる
 ******************************************************/

originalArray = ["hoge","foo",100,true];
copyArray = originalArray;

copyArray[0] = "fizz";
copyArray[3] = false;

//shallow copyされているので、要素の値が書き変わっている
console.log(originalArray);


/******************************************************
 配列をコピーする方法
 ******************************************************/

//Array.concatを使う。
//本来は配列に要素を追加する為のメソッドだが、引数を指定しなければ元の配列をコピーできる
sourceArray = ["hoge","foo",100,true];
destArray = sourceArray.concat();

destArray[0] = "fizz";
destArray[3] = false;

//今度はdeep copyとなり、元の値が保持される
console.log(sourceArray);


