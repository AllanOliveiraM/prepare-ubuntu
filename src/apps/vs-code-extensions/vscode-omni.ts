import { container, run } from 'utils/execution'

export const installVSCodeOmni = () =>
  container(async resolve => {
    console.log('[ Info ] Installing Visual Studio Code Omni extension...')

    run('code -v', error => {
      if (error) {
        throw new Error(
          'Failed to install Visual Studio Code Omni Extension - VSCode not found'
        )
      }

      run(
        'code --install-extension ./pkg/vs-code-extensions/rocketseat.theme-omni-1.0.12.vsix',
        error => {
          if (error) {
            throw new Error('Failed to install Visual Studio Code Omni Extension')
          }

          console.log('[ Info ] VSCode Omni installed successfully.')

          resolve()
        }
      )
    })
  })
