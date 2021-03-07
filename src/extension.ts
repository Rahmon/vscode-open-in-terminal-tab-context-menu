import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	const disposable = vscode.commands.registerCommand('extension.openInTerminal', () => {
		vscode.commands.executeCommand('openInTerminal');
	});

	context.subscriptions.push(disposable);
}