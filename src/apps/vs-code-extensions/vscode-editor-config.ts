import { container, run } from 'utils/execution'

export const installVSCodeEditorConfig = () =>
  container(async resolve => {
    console.log('[ Info ] Installing Visual Studio Code Editor Config extension...')

    run('code -v', error => {
      if (error) {
        throw new Error(
          'Failed to install Visual Studio Code Editor Config Extension - VSCode not found'
        )
      }

      run(
        'code --install-extension ./pkg/vs-code-extensions/EditorConfig.EditorConfig-0.16.4.vsix',
        error => {
          if (error) {
            throw new Error(
              'Failed to install Visual Studio Code Editor Config Extension'
            )
          }

          console.log('[ Info ] VSCode Editor Config installed successfully.')

          resolve()
        }
      )
    })
  })
