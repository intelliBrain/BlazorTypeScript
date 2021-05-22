// This file is to show how a library package may provide JavaScript interop features
// wrapped in a .NET API
var JSInteropWithTypeScript;
(function (JSInteropWithTypeScript) {
    var ExampleJsFunctions = /** @class */ (function () {
        function ExampleJsFunctions() {
        }
        ExampleJsFunctions.prototype.showPrompt = function (message) {
            return prompt(message, 'Type anything here');
        };
        return ExampleJsFunctions;
    }());
    function Load() {
        window['exampleJsFunctions'] = new ExampleJsFunctions();
    }
    JSInteropWithTypeScript.Load = Load;
})(JSInteropWithTypeScript || (JSInteropWithTypeScript = {}));
JSInteropWithTypeScript.Load();
//# sourceMappingURL=ExampleJsInterop.js.map