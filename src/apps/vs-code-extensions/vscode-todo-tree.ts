import { container, run } from 'utils/execution'

export const installVSCodeTodoTree = () =>
  container(async resolve => {
    console.log('[ Info ] Installing Visual Studio Code Todo Tree extension...')

    run('code -v', error => {
      if (error) {
        throw new Error(
          'Failed to install Visual Studio Code Todo Tree Extension - VSCode not found'
        )
      }

      run(
        'code --install-extension ./pkg/vs-code-extensions/Gruntfuggly.todo-tree-0.0.220.vsix',
        error => {
          if (error) {
            throw new Error('Failed to install Visual Studio Code Todo Tree Extension')
          }

          console.log('[ Info ] VSCode Todo Tree installed successfully.')

          resolve()
        }
      )
    })
  })
