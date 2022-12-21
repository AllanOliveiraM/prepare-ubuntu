import { container, run } from 'utils/execution'

export const installVSCodeAutoCloseTag = () =>
  container(async resolve => {
    console.log('[ Info ] Installing Visual Studio Code Auto Close Tag extension...')

    run('code -v', error => {
      if (error) {
        throw new Error(
          'Failed to install Visual Studio Code Auto Close Tag Extension - VSCode not found'
        )
      }

      run(
        'code --install-extension ./pkg/vs-code-extensions/formulahendry.auto-close-tag-0.5.14.vsix',
        error => {
          if (error) {
            throw new Error(
              'Failed to install Visual Studio Code Auto Close Tag Extension'
            )
          }

          console.log('[ Info ] VSCode Auto Close Tag installed successfully.')

          resolve()
        }
      )
    })
  })
