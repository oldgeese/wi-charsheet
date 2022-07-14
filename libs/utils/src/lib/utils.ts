import jsSHA from "jssha"

export const hash = (s: string): string=> {
  const shaObj = new jsSHA("SHA-512", "TEXT", { encoding: "UTF8" });
  shaObj.update(s);
  const hash = shaObj.getHash("HEX");
  return hash
}
