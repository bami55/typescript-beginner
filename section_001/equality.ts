/**
 * 等価演算子(Equality)
 * https://typescript-jp.gitbook.io/deep-dive/recap/equality#deng-si-yan-suan-zi-equality
 */

// 型が異なるとコンパイルエラーになる
console.log(5 == "5"); // true,  TS ERROR
console.log(5 === "5"); // false, TS ERROR

// "0" と "" はどちらも文字列なのでfalseになる
// 0 と "" はfalsyなので false == false でtrueになる
console.log("" == "0"); // false
console.log(0 == ""); // true

// なるべく === や !== を使うようにする
console.log("" === "0"); // false
console.log(0 === ""); // false

/**
 * 構造の等価性(Structural Equality)
 * https://typescript-jp.gitbook.io/deep-dive/recap/equality#nostructural-equality
 */

// オブジェクトの比較に == / === は使用できない
console.log({ a: 123 } == { a: 123 }); // False
console.log({ a: 123 } === { a: 123 }); // False

// そんなときは deep-equal を使用する
import * as deepEqual from "deep-equal";
console.log(deepEqual({ a: 123 }, { a: 123 })); // True

// deep-equalを使わなくても一般的にはID等で比較できる
type IdDisplay = {
  id: string;
  display: string;
};
const list: IdDisplay[] = [
  {
    id: "foo",
    display: "Foo Select",
  },
  {
    id: "bar",
    display: "Bar Select",
  },
];

const fooIndex = list.map((i) => i.id).indexOf("foo");
console.log(fooIndex); // 0
