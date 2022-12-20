import { container, run } from 'utils/execution'

export const installVSCodeLiveShare = () =>
  container(async resolve => {
    console.log('[ Info ] Installing Visual Studio Code Live Share extension...')

    run('code -v', error => {
      if (error) {
        throw new Error(
          'Failed to install Visual Studio Code Live Share Extension - VSCode not found'
        )
      }

      run(
        'code --install-extension ./pkg/vs-code-extensions/MS-vsliveshare.vsliveshare-1.0.5788.vsix',
        error => {
          if (error) {
            throw new Error('Failed to install Visual Studio Code Live Share Extension')
          }

          console.log('[ Info ] VSCode Live Share installed successfully.')

          resolve()
        }
      )
    })
  })
