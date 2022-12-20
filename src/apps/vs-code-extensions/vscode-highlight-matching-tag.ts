import { container, run } from 'utils/execution'

export const installVSCodeHighlightMatchingTag = () =>
  container(async resolve => {
    console.log(
      '[ Info ] Installing Visual Studio Code Highlight Matching Tag extension...'
    )

    run('code -v', error => {
      if (error) {
        throw new Error(
          'Failed to install Visual Studio Code Highlight Matching Tag Extension - VSCode not found'
        )
      }

      run(
        'code --install-extension ./pkg/vs-code-extensions/vincaslt.highlight-matching-tag-0.10.1.vsix',
        error => {
          if (error) {
            throw new Error(
              'Failed to install Visual Studio Code Highlight Matching Tag Extension'
            )
          }

          console.log('[ Info ] VSCode Highlight Matching Tag installed successfully.')

          resolve()
        }
      )
    })
  })
