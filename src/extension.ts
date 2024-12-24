import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand('multipleFiles.create', async (uri: vscode.Uri) => {
    // Get the folder path where files should be created
    const folderPath = uri ? uri.fsPath : vscode.workspace.workspaceFolders?.[0].uri.fsPath;

    if (!folderPath) {
      vscode.window.showErrorMessage('No workspace folder found');
      return;
    }

    // Prompt user for input
    const input = await vscode.window.showInputBox({
      prompt: 'Enter file names (separated by comma)',
      placeHolder: 'e.g., file1,folder/file2|.tsx or file1.tsx,folder/file2.tsx',
    });

    if (!input) {
      return;
    }

    try {
      let files: string[];
      let extension = '';

      // Check if input uses the pipe syntax for extension
      if (input.includes('|')) {
        const [fileList, ext] = input.split('|');
        files = fileList.split(',');
        extension = ext.trim();
      } else {
        files = input.split(',');
      }

      // Process each file
      for (const file of files) {
        const trimmedFile = file.trim();
        let fullPath: string;

        // If using pipe syntax, append extension
        if (extension) {
          fullPath = path.join(folderPath, `${trimmedFile}${extension}`);
        } else {
          fullPath = path.join(folderPath, trimmedFile);
        }

        // Create directories if they don't exist
        const dir = path.dirname(fullPath);
        if (!fs.existsSync(dir)) {
          fs.mkdirSync(dir, { recursive: true });
        }

        // Create file if it doesn't exist
        if (!fs.existsSync(fullPath)) {
          fs.writeFileSync(fullPath, '');
          vscode.window.showInformationMessage(`Created file: ${path.basename(fullPath)}`);
        } else {
          vscode.window.showWarningMessage(`File already exists: ${path.basename(fullPath)}`);
        }
      }
    } catch (error) {
      vscode.window.showErrorMessage(`Error creating files: ${error}`);
    }
  });

  context.subscriptions.push(disposable);
}

export function deactivate() {}
