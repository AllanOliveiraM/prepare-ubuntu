import { container, run } from 'utils/execution'

export const installVSCodeStyledComponents = () =>
  container(async resolve => {
    console.log('[ Info ] Installing Visual Studio Code Styled Components extension...')

    run('code -v', error => {
      if (error) {
        throw new Error(
          'Failed to install Visual Studio Code Styled Components Extension - VSCode not found'
        )
      }

      run(
        'code --install-extension ./pkg/vs-code-extensions/styled-components.vscode-styled-components-1.7.6.vsix',
        error => {
          if (error) {
            throw new Error(
              'Failed to install Visual Studio Code Styled Components Extension'
            )
          }

          console.log('[ Info ] VSCode ESLint installed successfully.')

          resolve()
        }
      )
    })
  })
