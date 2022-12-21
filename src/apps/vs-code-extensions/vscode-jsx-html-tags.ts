import { container, run } from 'utils/execution'

export const installVSCodeJSXHtmlTags = () =>
  container(async resolve => {
    console.log('[ Info ] Installing Visual Studio Code JSX HTML Tags extension...')

    run('code -v', error => {
      if (error) {
        throw new Error(
          'Failed to install Visual Studio Code JSX HTML Tags Extension - VSCode not found'
        )
      }

      run(
        'code --install-extension ./pkg/vs-code-extensions/angelorafael.jsx-html-tags-1.0.1.vsix',
        error => {
          if (error) {
            throw new Error(
              'Failed to install Visual Studio Code JSX HTML Tags Extension'
            )
          }

          console.log('[ Info ] VSCode JSX HTML Tags installed successfully.')

          resolve()
        }
      )
    })
  })
