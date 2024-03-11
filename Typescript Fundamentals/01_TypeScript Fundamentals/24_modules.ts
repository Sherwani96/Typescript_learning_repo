// always rember that when we use ./ before the file path it means that it's located in same folder or same directory

export const csr = 233;

import { csr } from "path";
// above is the best way of import from a module

// we can also rename the exported variable or function or whatever it is to our deisred name
import { greet_func as greet } from "path";

// if we're importing a chunk of code from a module so we use the following pattern
import { name of the thing we would like to export } from "path";

// if we use export default chunk of code from a module so we use the following pattern
import greet_func from "path";