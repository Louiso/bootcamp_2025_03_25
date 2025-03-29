import { mergeWith } from "es-toolkit";

export const merge = (target: any, source: any) => mergeWith(target, source, (objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return srcValue;
  }
});