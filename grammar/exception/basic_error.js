/**
 * 標準例外の一覧をまとめたサンプルメソッド
 *
 * @see https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Error
 * @param {number} arg
 */
function throwErrorSample (arg) {
    switch (arg) {
        case 0:
            throw new Error('最も標準的な例外');
            break;
        case 1:
            throw new TypeError('型チェックでの例外');
            break;
        case 2:
            throw new RangeError('範囲例外');
            break;
        case 3:
            throw new InternalError('JS内部例外(過剰な再帰等)');
            break;
        case 4:
            throw new ReferenceError('不正な参照をリードした際');
            break;
        case 5:
            throw new SyntaxError('eval()実行時のシンタックスエラー。殆ど使わない');
            break;
        case 6:
            throw new EvalError('eval()実行時のエラー。殆ど使わない');
            break;
        case 7:
            throw new URIError('encodeURI(),decodeURIに不正な引数渡すと発生するエラー。殆ど使わない');
            break;
        default:
            break;
    }
};

/**
 * 例外キャッチ例のサンプルメソッド
 */
function catchErrorSample () {
    try {
        throwErrorSample(4);
    } catch (e) {
        console.log('例外をキャッチしました');
        if (e instanceof ReferenceError) {
            console.log(e.name + e.message);
        } else {
            console.log('その他の例外');
        }
    }
};

catchErrorSample();