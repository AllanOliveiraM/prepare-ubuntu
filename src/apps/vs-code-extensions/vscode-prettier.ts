import { container, run } from 'utils/execution'

export const installVSCodePrettier = () =>
  container(async resolve => {
    console.log('[ Info ] Installing Visual Studio Code prettier extension...')

    run('code -v', error => {
      if (error) {
        throw new Error(
          'Failed to install Visual Studio Code prettier Extension - VSCode not found'
        )
      }

      run(
        'code --install-extension ./pkg/vs-code-extensions/esbenp.prettier-vscode-9.10.3.vsix',
        error => {
          if (error) {
            throw new Error('Failed to install Visual Studio Code prettier Extension')
          }

          console.log('[ Info ] VSCode prettier installed successfully.')

          resolve()
        }
      )
    })
  })
