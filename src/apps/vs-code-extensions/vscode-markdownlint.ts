import { container, run } from 'utils/execution'

export const installVSCodeMarkdownlint = () =>
  container(async resolve => {
    console.log('[ Info ] Installing Visual Studio Code Markdownlint extension...')

    run('code -v', error => {
      if (error) {
        throw new Error(
          'Failed to install Visual Studio Code Markdownlint Extension - VSCode not found'
        )
      }

      run(
        'code --install-extension ./pkg/vs-code-extensions/DavidAnson.vscode-markdownlint-0.48.1.vsix',
        error => {
          if (error) {
            throw new Error('Failed to install Visual Studio Code Markdownlint Extension')
          }

          console.log('[ Info ] VSCode Markdownlint installed successfully.')

          resolve()
        }
      )
    })
  })
