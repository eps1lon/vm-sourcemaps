#

`module.js` was created via `p tsc module.ts --sourceMap`.
That sourcemaps in `module.js` work is verified by running `node --enable-source-maps module.js`.

Execution with `runInThisContext`

```bash
$ node --enable-source-maps run.js
module.js:2
    throw new Error(reason);
    ^

Error: Boom
    at doError (module.js:2:11)
    at module.js:4:1
    at Script.runInThisContext (node:vm:139:12)
    at Module.runInThisContext (node:vm:319:38)
    at file://~/run.mjs:16:6
```

Standalone execution

```bash
$ node --enable-source-maps module.js
~/module.ts:4
  throw new Error(reason);
        ^


Error: Boom
    at doError (~/module.ts:4:9)
    at <anonymous> (~/module.ts:7:1)
    at ModuleJob.run (node:internal/modules/esm/module_job:271:25)
    at async onImport.tracePromise.__proto__ (node:internal/modules/esm/loader:547:26)
    at async asyncRunEntryPointWithESMLoader (node:internal/modules/run_main:116:5)

Node.js v24.0.0-pre
```
