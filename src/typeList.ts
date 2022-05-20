/**eslint-disable @typescript-eslint/no-unused-vars */
/**typescriptの基本型 */

// true,false
let bool: boolean = true;

// 数値
let num: number = 0;

// 文字列
let str: string = "A";

// 配列
let arr: Array<number> = [0, 1, 2];
let arr2: number[] = [0, 1, 2];

// タプル型　違う型を持つ配列を扱える
let tuple: [number, string] = [0, "A"];

// なんでも型　あんま意味ない
let any1: any = false;

// void型 何も返却しない
const funcA = (): void => {
  const test = "TEST";
};

// null型
let null1: null = null;

let undefined1: undefined = undefined;

let obj1: object = {};
// 空のオブジェクトで表すこともできるけど、なんでも入るから意味がない
let obj2: { id: number; name: string } = { id: 0, name: "aa" };
