/**
 * Source entry point for skill-lint-action.
 *
 * The action logic lives in dist/index.js as a self-contained bundle.
 * dist/index.js is the single source of truth — it is NOT a build
 * artifact generated from src/. If you want to modify the action,
 * edit dist/index.js directly.
 *
 * dist/index.js contains (zero external dependencies):
 *   - Minimal YAML parser for SKILL.md frontmatter
 *   - 16 validation rules (2 errors, 10+ warnings, 4 info)
 *   - Recursive SKILL.md file discovery
 *   - GitHub Actions I/O (workflow commands, step summary)
 *
 * The action.yml entry point is dist/index.js.
 */
