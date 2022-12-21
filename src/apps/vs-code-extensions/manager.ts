import { installVSCodeBetterComments } from 'apps/vs-code-extensions/vscode-better-comments'
import { installVSCodeEslint } from 'apps/vs-code-extensions/vscode-eslint'
import { installVSCodeJSXHtmlTags } from 'apps/vs-code-extensions/vscode-jsx-html-tags'
import { installVSCodeMarkdownlint } from 'apps/vs-code-extensions/vscode-markdownlint'
import { installVSCodeTurboConsoleLog } from 'apps/vs-code-extensions/vscode-turbo-console-log'

import { install } from 'utils/install'

import { installVSCodeAutoCloseTag } from './vscode-auto-close-tag'
import { installVSCodeAutoImport } from './vscode-auto-import'
import { installVSCodeColorHighlight } from './vscode-color-highlight'
import { installVSCodeColorCSSAutoPrefix } from './vscode-css-auto-prefix'
import { installVSCodeEditorConfig } from './vscode-editor-config'
import { installVSCodeEnv } from './vscode-env'
import { installVSCodeGitlens } from './vscode-gitlens'
import { installVSCodeHighlightMatchingTag } from './vscode-highlight-matching-tag'
import { installVSCodeJSBooster } from './vscode-javascript-booster'
import { installVSCodeLiveserver } from './vscode-liveserver'
import { installVSCodeLiveShare } from './vscode-liveshare'
import { installVSCodeMaterialIconTheme } from './vscode-material-icon-theme'
import { installVSCodeMDX } from './vscode-mdx'
import { installVSCodeOmni } from './vscode-omni'
import { installVSCodePrettier } from './vscode-prettier'
import { installVSCodePrisma } from './vscode-prisma'
import { installVSCodeSass } from './vscode-sass'
import { installVSCodeShellFormat } from './vscode-shell-format'
import { installVSCodeStyledComponents } from './vscode-styled-componets'
import { installVSCodeTodoTree } from './vscode-todo-tree'

export const performVSCodeExtensionsInstall = async () => {
  await Promise.all([
    install('vscode-eslint', () => installVSCodeEslint(), ['vs-code']),
    install('vscode-better-comments', () => installVSCodeBetterComments(), ['vs-code']),
    install('vscode-jsx-html-tags', () => installVSCodeJSXHtmlTags(), ['vs-code']),
    install('vscode-turbo-console-log', () => installVSCodeTurboConsoleLog(), [
      'vs-code',
    ]),
    install('vscode-markdownlint', () => installVSCodeMarkdownlint(), ['vs-code']),
    install('vscode-gitlens', () => installVSCodeGitlens(), ['vs-code']),
    install('vscode-editor-config', () => installVSCodeEditorConfig(), ['vs-code']),
    install('vscode-prettier', () => installVSCodePrettier(), ['vs-code']),
    install('vscode-auto-close-tag', () => installVSCodeAutoCloseTag(), ['vs-code']),
    install('vscode-shell-format', () => installVSCodeShellFormat(), ['vs-code']),
  ])

  await Promise.all([
    install('vscode-env', () => installVSCodeEnv(), ['vs-code']),
    install('vscode-liveshare', () => installVSCodeLiveShare(), ['vs-code']),
    install('vscode-color-highlight', () => installVSCodeColorHighlight(), ['vs-code']),
    install('vscode-material-icon-theme', () => installVSCodeMaterialIconTheme(), [
      'vs-code',
    ]),
    install('vscode-prisma', () => installVSCodePrisma(), ['vs-code']),
    install('vscode-liveserver', () => installVSCodeLiveserver(), ['vs-code']),
    install('vscode-omni', () => installVSCodeOmni(), ['vs-code']),
    install('vscode-javascript-booster', () => installVSCodeJSBooster(), ['vs-code']),
    install('vscode-css-auto-prefix', () => installVSCodeColorCSSAutoPrefix(), [
      'vs-code',
    ]),
    install('vscode-auto-import', () => installVSCodeAutoImport(), ['vs-code']),
  ])

  await Promise.all([
    install('vscode-styled-componets', () => installVSCodeStyledComponents(), [
      'vs-code',
    ]),
    install('vscode-sass', () => installVSCodeSass(), ['vs-code']),
    install('vscode-highlight-matching-tag', () => installVSCodeHighlightMatchingTag(), [
      'vs-code',
    ]),
    install('vscode-mdx', () => installVSCodeMDX(), ['vs-code']),
    install('vscode-todo-tree', () => installVSCodeTodoTree(), ['vs-code']),
  ])
}
