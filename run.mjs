import { readFile } from "fs/promises";
import * as vm from "vm";

const code = await readFile("./module.js", "utf8");

try {
  vm.runInContext(code, vm.createContext(), { filename: "module.js" });
} catch (error) {
  console.error(error);
}
