# Multiple Files Creator

## Overview

The Multiple Files Creator extension for Visual Studio Code allows you to create multiple files at once by providing a comma-separated list of file names. This extension supports creating files with specified extensions and nested directories.

## Features

- Create multiple files with a single command.
- Specify file extensions using a pipe (`|`) syntax.
- Automatically create nested directories if they do not exist.
- Add a context menu option in the Explorer view for easy access.

## Usage

### Creating Multiple Files

You can create multiple files by providing a comma-separated list of file names. There are two ways to specify the file names:

1. **Without specifying extensions**:

   ```
   use-boolean.tsx,use-string.tsx,use-number.tsx,use-array.tsx,use-object.tsx
   ```

2. **Using the pipe (`|`) syntax to specify extensions**:
   ```
   use-boolean,use-string,use-number,use-array,use-object|.tsx
   ```

### Creating Files in Nested Directories

You can also create files in nested directories by including slashes (`/`) in the file names:

1. **Without specifying extensions**:

   ```
   use-boolean.tsx,hooks/use-string.tsx,use-number.tsx
   ```

2. **Using the pipe (`|`) syntax to specify extensions**:
   ```
   use-boolean,hooks/use-string,use-number|.tsx
   ```

## Installation

To install the extension, follow these steps:

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

## Contributing

If you would like to contribute to this project, please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License.
