import { container, run } from 'utils/execution'

export const installVSCodeAutoImport = () =>
  container(async resolve => {
    console.log('[ Info ] Installing Visual Studio Code Auto Import extension...')

    run('code -v', error => {
      if (error) {
        throw new Error(
          'Failed to install Visual Studio Code Auto Import Extension - VSCode not found'
        )
      }

      run(
        'code --install-extension ./pkg/vs-code-extensions/steoates.autoimport-1.5.4.vsix',
        error => {
          if (error) {
            throw new Error('Failed to install Visual Studio Code Auto Import Extension')
          }

          console.log('[ Info ] VSCode Auto Import installed successfully.')

          resolve()
        }
      )
    })
  })
