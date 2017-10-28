// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {

    let pascalCmd = vscode.commands.registerCommand('extension.fastCaseChange.pascal', function () {
        var editor = vscode.window.activeTextEditor;
        if (!editor) {
            return; // No open text editor
        }

        var selection = editor.selection;
        var text = editor.document.getText(selection);
        editor.edit(builder => {
            builder.replace(selection, toPascalCase(text))
        })
    });
    context.subscriptions.push(pascalCmd);

    let camelCmd = vscode.commands.registerCommand('extension.fastCaseChange.camel', function () {
        var editor = vscode.window.activeTextEditor;
        if (!editor) {
            return; // No open text editor
        }

        var selection = editor.selection;
        var text = editor.document.getText(selection);
        editor.edit(builder => {
            builder.replace(selection, toCamelCase(text))
        })
    });
    context.subscriptions.push(camelCmd);

    let snakeCmd = vscode.commands.registerCommand('extension.fastCaseChange.snake', function () {
        var editor = vscode.window.activeTextEditor;
        if (!editor) {
            return; // No open text editor
        }

        var selection = editor.selection;
        var text = editor.document.getText(selection);
        editor.edit(builder => {
            builder.replace(selection, toSnakeCase(text))
        })
    });
    context.subscriptions.push(snakeCmd);

    let kebapCmd = vscode.commands.registerCommand('extension.fastCaseChange.kebap', function () {
        var editor = vscode.window.activeTextEditor;
        if (!editor) {
            return; // No open text editor
        }

        var selection = editor.selection;
        var text = editor.document.getText(selection);
        editor.edit(builder => {
            builder.replace(selection, toKebapCase(text))
        })
    });
    context.subscriptions.push(kebapCmd);

    let lowerCmd = vscode.commands.registerCommand('extension.fastCaseChange.lower', function () {
        var editor = vscode.window.activeTextEditor;
        if (!editor) {
            return; // No open text editor
        }

        var selection = editor.selection;
        var text = editor.document.getText(selection);
        editor.edit(builder => {
            builder.replace(selection, text.toLowerCase())
        })
    });
    context.subscriptions.push(lowerCmd);

    let upperCmd = vscode.commands.registerCommand('extension.fastCaseChange.upper', function () {
        var editor = vscode.window.activeTextEditor;
        if (!editor) {
            return; // No open text editor
        }

        var selection = editor.selection;
        var text = editor.document.getText(selection);
        editor.edit(builder => {
            builder.replace(selection, text.toUpperCase())
        })
    });
    context.subscriptions.push(upperCmd);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {
}
exports.deactivate = deactivate;

function getWords(targetString) {
    return targetString.split(/(?:-|_)|(?=[A-Z])/).map(word => word.toLowerCase());
}

function toPascalCase(targetString) {
    if (!targetString)
        return targetString;
    return getWords(targetString).reduce((pascalStr, word) => {
        return pascalStr.concat(word[0].toUpperCase().concat(word.slice(1)));
    }, '');
}

function toCamelCase(targetString) {
    return getWords(targetString).reduce((camelString, word) => {
        return camelString.concat(word[0].toUpperCase().concat(word.slice(1)));
    });
}

function toSnakeCase(targetString) {
    return getWords(targetString).join('_');
}

function toKebapCase(targetString) {
    return getWords(targetString).join('-');
}
