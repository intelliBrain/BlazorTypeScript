// This file is to show how a library package may provide JavaScript interop features
// wrapped in a .NET API

namespace JSInteropWithTypeScript {

    class ExampleJsFunctions {
        public showPrompt(message: string): string {
            return prompt(message, 'Type anything here');
        }
    }

    export function Load(): void {
        window['exampleJsFunctions'] = new ExampleJsFunctions();
    }
}

JSInteropWithTypeScript.Load();