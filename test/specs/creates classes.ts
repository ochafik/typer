// SEMI-AUTOGENERATED FILE, PLEASE ONLY EDIT INPUTS.
//
// REGENERATE OUTPUTS AND METADATA WITH `npm run update-specs`.

import {TestSpec} from '../../src/testing/test_spec';

export default {
  files: {
    'input.js': `
      import {Foo} from 'foo';
      new Foo(1).x = 1;

      var Bar = function(x) {};
      new Bar('').y = 1;

      function Baz(x) {}
      new Baz(true).z = 1;
    `
  },
  options: {},
  result: {
    files: {
      'input.js': `
import {Foo} from 'foo';
new Foo(1).x = 1;

var Bar: new (x: string) => void = function (x: string): void {};
new Bar('').y = 1;

function Baz(x: boolean): void {}
new Baz(true).z = 1;
`,
      'node_modules/@types/foo/index.d.ts': `declare module "foo" {
  export class Foo {
    constructor(arg1: number);
  }
}
`
    },
    metadata: {
      inferencePasses: 3
    }
  }
} as TestSpec
