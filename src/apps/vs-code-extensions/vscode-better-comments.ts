import { container, run } from 'utils/execution'

export const installVSCodeBetterComments = () =>
  container(async resolve => {
    console.log('[ Info ] Installing Visual Studio Code Better Comments extension...')

    run('code -v', error => {
      if (error) {
        throw new Error(
          'Failed to install Visual Studio Code Better Comments Extension - VSCode not found'
        )
      }

      run(
        'code --install-extension ./pkg/vs-code-extensions/aaron-bond.better-comments-3.0.2.vsix',
        error => {
          if (error) {
            throw new Error(
              'Failed to install Visual Studio Code Better Comments Extension'
            )
          }

          console.log('[ Info ] VSCode Better Comments installed successfully.')

          resolve()
        }
      )
    })
  })
