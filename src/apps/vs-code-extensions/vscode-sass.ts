import { container, run } from 'utils/execution'

export const installVSCodeSass = () =>
  container(async resolve => {
    console.log('[ Info ] Installing Visual Studio Code Sass extension...')

    run('code -v', error => {
      if (error) {
        throw new Error(
          'Failed to install Visual Studio Code Sass Extension - VSCode not found'
        )
      }

      run(
        'code --install-extension ./pkg/vs-code-extensions/Syler.sass-indented-1.8.23.vsix',
        error => {
          if (error) {
            throw new Error('Failed to install Visual Studio Code Sass Extension')
          }

          console.log('[ Info ] VSCode ESLint installed successfully.')

          resolve()
        }
      )
    })
  })
