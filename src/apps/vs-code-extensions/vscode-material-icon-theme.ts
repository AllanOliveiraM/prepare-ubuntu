import { container, run } from 'utils/execution'

export const installVSCodeMaterialIconTheme = () =>
  container(async resolve => {
    console.log('[ Info ] Installing Visual Studio Code Material Icon Theme extension...')

    run('code -v', error => {
      if (error) {
        throw new Error(
          'Failed to install Visual Studio Code Material Icon Theme Extension - VSCode not found'
        )
      }

      run(
        'code --install-extension ./pkg/vs-code-extensions/PKief.material-icon-theme-4.22.0.vsix',
        error => {
          if (error) {
            throw new Error(
              'Failed to install Visual Studio Code Material Icon Theme Extension'
            )
          }

          console.log('[ Info ] VSCode Material Icon Theme installed successfully.')

          resolve()
        }
      )
    })
  })
