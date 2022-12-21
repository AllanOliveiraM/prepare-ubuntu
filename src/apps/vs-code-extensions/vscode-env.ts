import { container, run } from 'utils/execution'

export const installVSCodeEnv = () =>
  container(async resolve => {
    console.log('[ Info ] Installing Visual Studio Code Env extension...')

    run('code -v', error => {
      if (error) {
        throw new Error(
          'Failed to install Visual Studio Code Env Extension - VSCode not found'
        )
      }

      run(
        'code --install-extension ./pkg/vs-code-extensions/IronGeek.vscode-env-0.1.0.vsix',
        error => {
          if (error) {
            throw new Error('Failed to install Visual Studio Code Env Extension')
          }

          console.log('[ Info ] VSCode Env installed successfully.')

          resolve()
        }
      )
    })
  })
