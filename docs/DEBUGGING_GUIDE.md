# 🐛 The "Shift-Left" Debugging Guide (Chrome MCP)

## Overview
This project isn't just "responsive"; it's **Agent-Aware**. We utilize the Model Context Protocol (MCP) to allow AI agents to "see" and "interact" with the localhost environment directly.

## The Mental Model
*   **The Target**: Your browser running on port `9222`.
*   **The Translator**: The `@modelcontextprotocol/server-puppeteer` package.
*   **The Agent**: Your AI IDE (Cursor/Claude).

## Setup Protocol
To enable this advanced workflow:

1.  **Launch the Target** (Terminal 1):
    ```bash
    /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --remote-debugging-port=9222 --user-data-dir=/tmp/chrome-debug http://localhost:5173
    ```

2.  **Running the App** (Terminal 2):
    ```bash
    npm run dev
    ```

3.  **Configuring the Agent**:
    Add this to your AI Client config (e.g., `claude_desktop_config.json`):
    ```json
    {
      "mcpServers": {
        "chrome": {
          "command": "npx",
          "args": ["-y", "@modelcontextprotocol/server-puppeteer"]
        }
      }
    }
    ```

## Capabilities
Once connected, the Agent can:
*   ✅ Click buttons and verify UI states.
*   ✅ Read console logs for "silent" errors.
*   ✅ Verify accessibility (ARIA labels) in real-time.

---
*Verified as part of the GaborPortfolio QA Standard.*
