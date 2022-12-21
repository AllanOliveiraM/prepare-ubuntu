import { container, run } from 'utils/execution'

export const installVSCodeColorCSSAutoPrefix = () =>
  container(async resolve => {
    console.log('[ Info ] Installing Visual Studio Code CSS Auto Prefix extension...')

    run('code -v', error => {
      if (error) {
        throw new Error(
          'Failed to install Visual Studio Code CSS Auto Prefix Extension - VSCode not found'
        )
      }

      run(
        'code --install-extension ./pkg/vs-code-extensions/sporiley.css-auto-prefix-0.1.7.vsix',
        error => {
          if (error) {
            throw new Error(
              'Failed to install Visual Studio Code CSS Auto Prefix Extension'
            )
          }

          console.log('[ Info ] VSCode CSS Auto Prefix installed successfully.')

          resolve()
        }
      )
    })
  })
