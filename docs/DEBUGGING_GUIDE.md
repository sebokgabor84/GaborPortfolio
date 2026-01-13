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

## 4. Unit Testing Strategy (Vitest)
We use **Vitest** for fast, "Jest-compatible" unit testing.

### Running Tests
*   `npm test`: Runs all tests in watch mode.
*   `npm run test:ci`: Runs once (for CI/CD).

### Writing Tests
Follow the pattern `Component.test.tsx` alongside the component.
*   **Mocking i18n**: The `src/setupTests.ts` globally mocks `react-i18next`. Use `vi.mock` in individual files only if you need to spy on specific functions like `changeLanguage`.
*   **User Interactions**: Use `@testing-library/user-event` for realistic clicks and typing.

### Critical Coverage Areas
1.  **Language Switching**: `LanguageDial.test.tsx` verifies the i18n trigger.
2.  **Navigation**: `SocialDock.test.tsx` verifies external link security (`noopener noreferrer`).
3.  **Core Logic**: `Gauge.test.tsx` and `ProjectCard.test.tsx`.

