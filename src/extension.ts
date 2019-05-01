'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { AsyncAction } from './AsyncAction';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
    context.subscriptions.push(vscode.commands.registerCommand('extension.sayHello', () => {
        // Display a message box to the user
        vscode.window.showInformationMessage('Hello World!');
    }));
    
    context.subscriptions.push(vscode.commands.registerCommand('extension.executeGet', () => {
        getStringGetMsg().then((text) =>{
            vscode.window.showWarningMessage(text);
        });
        
    }));

}
// this method is called when your extension is deactivated
export function deactivate() {
}


vscode.workspace.onDidChangeTextDocument((event) => {
    vscode.window.showSaveDialog({ saveLabel: 'lalala', filters: { 'Images': ['png', 'jpg'] } });
});

//async  that return a Promise<string>: in order to grab the object the caller should use then()
async function getStringGetMsg() {
    //grab the content from this async action, create a normalized string and return it as string object (and not as promise)
    let msg = await AsyncAction.invokeGet('http://www.mocky.io/v2/5cc954fc310000dc0c12cc9c');
    console.log(msg.body);
    return msg.body.test + ' really!';

}