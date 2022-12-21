import { container, run } from 'utils/execution'

export const installVSCodeShellFormat = () =>
  container(async resolve => {
    console.log('[ Info ] Installing Visual Studio Code Shell Format extension...')

    run('code -v', error => {
      if (error) {
        throw new Error(
          'Failed to install Visual Studio Code Shell Format Extension - VSCode not found'
        )
      }

      run(
        'code --install-extension ./pkg/vs-code-extensions/foxundermoon.shell-format-7.2.2.vsix',
        error => {
          if (error) {
            throw new Error('Failed to install Visual Studio Code Shell Format Extension')
          }

          console.log('[ Info ] VSCode Shell Format installed successfully.')

          resolve()
        }
      )
    })
  })
