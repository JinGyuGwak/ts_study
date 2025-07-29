/**
 * 조건부 타입
 */

import { type } from "os";

type A = number extends string ? string : number;

type ObjA = {
  a: number;
};

type ObjB = {
  a: number;
  b: number;
};

type B = ObjB extends ObjA ? number : string;

/**
 * 제네릭과 조건부 타입
 */

type StringNumberSwitch<T> = T extends number ? string : number;

function removeSpace<T>(text: T): T extends string ? string : undefined;
function removeSpace(text: any) {
  if (typeof text === "string") {
    return text.replaceAll(" ", "");
  }
  return undefined;
}

let result = removeSpace("hi im jin");
result.toUpperCase();
