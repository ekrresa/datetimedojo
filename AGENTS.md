# Agent Instructions for `datetimedojo`

This document provides guidelines for AI agents working on this codebase.

## Build, Lint, and Test Commands

- **Build:** `pnpm build`
- **Lint:** `pnpm lint`
- **Dev Server:** `pnpm dev`
- **Test:** No test command found. Please add tests and a test runner if you add new features.

## Code Style Guidelines

- **Formatting:** Code is formatted with Biome. Adhere to the existing style.
- **Imports:** Imports are organized by Biome. Run `pnpm lint --apply` to format and organize imports.
- **Types:** The project uses TypeScript with strict mode. Add types for all new code.
- **Naming Conventions:** Components are PascalCase (e.g., `MyComponent.tsx`). Other files and variables are camelCase.
- **Error Handling:** Use try/catch blocks for asynchronous operations and handle errors gracefully.
- **Components:** Create new components in the `src/app/components` directory.
- **State Management:** The project uses Jotai for state management. Use atoms for new state.
- **Styling:** The project uses Tailwind CSS. Use utility classes for styling.
