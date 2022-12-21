import { container, run } from 'utils/execution'

export const installVSCodeColorHighlight = () =>
  container(async resolve => {
    console.log('[ Info ] Installing Visual Studio Code Color Highlight extension...')

    run('code -v', error => {
      if (error) {
        throw new Error(
          'Failed to install Visual Studio Code Color Highlight Extension - VSCode not found'
        )
      }

      run(
        'code --install-extension ./pkg/vs-code-extensions/naumovs.color-highlight-2.5.0.vsix',
        error => {
          if (error) {
            throw new Error(
              'Failed to install Visual Studio Code Color Highlight Extension'
            )
          }

          console.log('[ Info ] VSCode Color Highlight installed successfully.')

          resolve()
        }
      )
    })
  })
