import { container, run } from 'utils/execution'

export const installVSCodeEslint = () =>
  container(async resolve => {
    console.log('[ Info ] Installing Visual Studio Code ESLint extension...')

    run('code -v', error => {
      if (error) {
        throw new Error(
          'Failed to install Visual Studio Code ESLint Extension - VSCode not found'
        )
      }

      run(
        'code --install-extension ./pkg/vs-code-extensions/dbaeumer.vscode-eslint-2.3.0.vsix',
        error => {
          if (error) {
            throw new Error('Failed to install Visual Studio Code ESLint Extension')
          }

          console.log('[ Info ] VSCode ESLint installed successfully.')

          resolve()
        }
      )
    })
  })
