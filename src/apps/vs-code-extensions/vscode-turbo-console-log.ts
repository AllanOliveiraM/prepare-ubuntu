import { container, run } from 'utils/execution'

export const installVSCodeTurboConsoleLog = () =>
  container(async resolve => {
    console.log('[ Info ] Installing Visual Studio Code Turbo Console Log extension...')

    run('code -v', error => {
      if (error) {
        throw new Error(
          'Failed to install Visual Studio Code Turbo Console Log Extension - VSCode not found'
        )
      }

      run(
        'code --install-extension ./pkg/vs-code-extensions/ChakrounAnas.turbo-console-log-2.6.2.vsix',
        error => {
          if (error) {
            throw new Error(
              'Failed to install Visual Studio Code Turbo Console Log Extension'
            )
          }

          console.log('[ Info ] VSCode Turbo Console Log installed successfully.')

          resolve()
        }
      )
    })
  })
