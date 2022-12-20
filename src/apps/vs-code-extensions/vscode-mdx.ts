import { container, run } from 'utils/execution'

export const installVSCodeMDX = () =>
  container(async resolve => {
    console.log('[ Info ] Installing Visual Studio Code MDX extension...')

    run('code -v', error => {
      if (error) {
        throw new Error(
          'Failed to install Visual Studio Code MDX Extension - VSCode not found'
        )
      }

      run(
        'code --install-extension ./pkg/vs-code-extensions/unifiedjs.vscode-mdx-1.0.3.vsix',
        error => {
          if (error) {
            throw new Error('Failed to install Visual Studio Code MDX Extension')
          }

          console.log('[ Info ] VSCode MDX installed successfully.')

          resolve()
        }
      )
    })
  })
