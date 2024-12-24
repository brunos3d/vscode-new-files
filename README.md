# Multiple Files Creator

// ...existing content...

## Testing the Extension Locally

To test this extension locally in your VS Code, follow these steps:

1. **Clone the repository**:

   ```sh
   git clone https://github.com/your-username/vscode-new-files.git
   cd vscode-new-files
   ```

2. **Install dependencies**:

   ```sh
   npm install
   ```

3. **Compile the extension**:

   ```sh
   npm run compile
   ```

4. **Open the project in VS Code**:

   ```sh
   code .
   ```

5. **Run the extension**:

   - Press `F5` to open a new VS Code window with your extension loaded.
   - In the new window, you can use the command palette (`Ctrl+Shift+P` or `Cmd+Shift+P` on Mac) and search for `New Files...` to test the extension.

6. **Make changes and test**:
   - If you make changes to the code, you can recompile using `npm run compile` or use `npm run watch` to automatically compile on changes.
   - Press `F5` again to reload the extension with the latest changes.

> **Note**: Ensure that the command `multipleFiles.create` is correctly registered and that the activation event is set to `onCommand:multipleFiles.create` in the `package.json` file.
