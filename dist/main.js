(function(modules) {
      function require(filename) {
        var fn = modules[filename];
        var module = {
          exports: {}
        };

        fn(require, module, module.exports);

        return module.exports;
      }

      require('/Users/bytedance/Downloads/Git/cli/tiny-webpack/src/index.js');
    })({ '/Users/bytedance/Downloads/Git/cli/tiny-webpack/src/index.js': function(require, module, exports) { "use strict";

var _greeting = require("./greeting.js");

require("./a.js");

require("./b.js");

document.write((0, _greeting.greeting)('Jane')); },
'./greeting.js': function(require, module, exports) { "use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.greeting = greeting;

function greeting(name) {
  return 'hello ' + name;
}

; },
'./a.js': function(require, module, exports) { "use strict";

require("c.js");

require("d.js"); },
'./b.js': function(require, module, exports) { "use strict";

require("./e.js"); },
'c.js': function(require, module, exports) { "use strict"; },
'd.js': function(require, module, exports) { "use strict"; },
'./e.js': function(require, module, exports) { "use strict"; },
 })