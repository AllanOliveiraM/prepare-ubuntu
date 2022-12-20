import { container, run } from 'utils/execution'

export const installVSCodeJSBooster = () =>
  container(async resolve => {
    console.log('[ Info ] Installing Visual Studio Code JS Booster extension...')

    run('code -v', error => {
      if (error) {
        throw new Error(
          'Failed to install Visual Studio Code JS Booster Extension - VSCode not found'
        )
      }

      run(
        'code --install-extension ./pkg/vs-code-extensions/sburg.vscode-javascript-booster-14.0.1.vsix',
        error => {
          if (error) {
            throw new Error('Failed to install Visual Studio Code JS Booster Extension')
          }

          console.log('[ Info ] VSCode JS Booster installed successfully.')

          resolve()
        }
      )
    })
  })
