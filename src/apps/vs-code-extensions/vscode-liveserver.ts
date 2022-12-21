import { container, run } from 'utils/execution'

export const installVSCodeLiveserver = () =>
  container(async resolve => {
    console.log('[ Info ] Installing Visual Studio Code Live Server extension...')

    run('code -v', error => {
      if (error) {
        throw new Error(
          'Failed to install Visual Studio Code Live Server Extension - VSCode not found'
        )
      }

      run(
        'code --install-extension ./pkg/vs-code-extensions/ritwickdey.LiveServer-5.7.9.vsix',
        error => {
          if (error) {
            throw new Error('Failed to install Visual Studio Code Live Server Extension')
          }

          console.log('[ Info ] VSCode Live Server installed successfully.')

          resolve()
        }
      )
    })
  })
