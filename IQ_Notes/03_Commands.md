# VS Code Commands — Master Reference

**Definition:** VS Code commands are keyboard shortcuts and command palette actions that let you navigate, edit, debug, and manage your code faster without reaching for the mouse.

---

## Comparison Table — Command Categories

| Category | Command / Shortcut | What It Does |
|---|---|---|
| **File Operations** | `Ctrl+N` / `Cmd+N` | New file |
| | `Ctrl+O` / `Cmd+O` | Open file |
| | `Ctrl+S` / `Cmd+S` | Save file |
| | `Ctrl+Shift+S` / `Cmd+Shift+S` | Save As |
| | `Ctrl+W` / `Cmd+W` | Close tab |
| | `Ctrl+K Ctrl+W` / `Cmd+K Cmd+W` | Close all tabs |
| **Editing** | `Ctrl+X` / `Cmd+X` | Cut line (no selection) |
| | `Ctrl+C` / `Cmd+C` | Copy line (no selection) |
| | `Ctrl+V` / `Cmd+V` | Paste |
| | `Ctrl+Z` / `Cmd+Z` | Undo |
| | `Ctrl+Shift+Z` / `Cmd+Shift+Z` | Redo |
| | **`Ctrl+/` / `Cmd+/`** | **Toggle line comment** |
| | `Shift+Alt+F` / `Shift+Option+F` | Format document |
| | `Alt+↑` / `Option+↑` | Move line up |
| | `Alt+↓` / `Option+↓` | Move line down |
| | `Ctrl+D` / `Cmd+D` | Add selection to next find match |
| | `Ctrl+Shift+L` / `Cmd+Shift+L` | Select all occurrences of selection |
| **Multi-Cursor** | `Alt+Click` / `Option+Click` | Insert cursor at click position |
| | `Ctrl+Alt+↑/↓` / `Cmd+Option+↑/↓` | Insert cursor above/below |
| **Search & Navigate** | `Ctrl+P` / `Cmd+P` | Quick Open (file by name) |
| | `Ctrl+Shift+F` / `Cmd+Shift+F` | Search across files |
| | `Ctrl+H` / `Cmd+H` | Find and replace in file |
| | `F12` | Go to Definition |
| | `Alt+F12` / `Option+F12` | Peek Definition |
| | `Ctrl+G` / `Cmd+G` | Go to Line |
| | `Ctrl+T` / `Cmd+T` | Show all Symbols |
| **Sidebar & Layout** | `Ctrl+B` / `Cmd+B` | Toggle sidebar |
| | `Ctrl+J` / `Cmd+J` | Toggle panel (terminal/output) |
| | `Ctrl+` ` / `Cmd+` `` | Toggle terminal |
| | `Ctrl+K V` / `Cmd+K V` | Open Markdown preview to side |
| | `Ctrl+Shift+E` / `Cmd+Shift+E` | Show Explorer |
| | `Ctrl+Shift+G` / `Cmd+Shift+G` | Source Control (Git) panel |
| **Debug** | `F5` | Start/Continue debugging |
| | `F10` | Step Over |
| | `F11` | Step Into |
| | `Shift+F11` | Step Out |
| | `Shift+F5` | Stop debugging |
| | `Ctrl+F5` / `Cmd+F5` | Start without debugging |
| **Command Palette** | `Ctrl+Shift+P` / `Cmd+Shift+P` | Open Command Palette |
| **View / Tabs** | `Ctrl+Tab` / `Cmd+Tab` | Cycle through open tabs |
| | `Ctrl+1/2/3` / `Cmd+1/2/3` | Focus editor group 1/2/3 |
| | `Ctrl+Shift+[` / `Cmd+Shift+[` | Fold (collapse) block |
| | `Ctrl+Shift+]` / `Cmd+Shift+]` | Unfold (expand) block |
| **IntelliSense** | `Ctrl+Space` / `Cmd+Space` | Trigger suggestion |
| | `Ctrl+Shift+Space` / `Cmd+Shift+Space` | Trigger parameter hints |
| **Terminal** | `Ctrl+`` ` / `Cmd+`` ` | Toggle integrated terminal |
| | `Ctrl+Shift+`` ` / `Cmd+Shift+`` ` | Create new terminal |
| **Git** | `Ctrl+Shift+G` / `Cmd+Shift+G` | Open Source Control |
| | `Ctrl+Enter` / `Cmd+Enter` | Commit (in commit message box) |

---

## Command Flow in VS Code

```
   You press a shortcut (e.g., Ctrl+/)
            │
            ▼
   VS Code receives the keybinding
            │
            ▼
   Matches against keybindings.json (user/default)
            │
            ▼
   VS Code dispatches the command
            │
            ▼
   e.g., editor.action.commentLine
            │
            ▼
   Editor toggles comment on the current line
            │
            ▼
   Output: Line is commented or uncommented
```

## Key Takeaways

1. **`Ctrl+/` (Win) / `Cmd+/` (Mac)** — The most-used commenting shortcut, found directly in `05_Comments.js`.
2. **Command Palette (`Ctrl+Shift+P` / `Cmd+Shift+P`)** — The gateway to every VS Code command. If you forget a shortcut, search here.
3. **Most shortcuts differ between Mac and Windows** — Mac uses `Cmd` (⌘) where Windows uses `Ctrl`, and `Option` where Windows uses `Alt`.
4. **You can customize any shortcut** — Open `keybindings.json` from the Command Palette to override defaults.
5. **`F12` and `Alt+F12`** — Core navigation shortcuts for jumping to and peeking at definitions.
