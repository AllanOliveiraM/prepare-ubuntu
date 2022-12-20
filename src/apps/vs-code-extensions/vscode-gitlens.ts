import { container, run } from 'utils/execution'

export const installVSCodeGitlens = () =>
  container(async resolve => {
    console.log('[ Info ] Installing Visual Studio Code Gitlens extension...')

    run('code -v', error => {
      if (error) {
        throw new Error(
          'Failed to install Visual Studio Code Gitlens Extension - VSCode not found'
        )
      }

      run(
        'code --install-extension ./pkg/vs-code-extensions/eamodio.gitlens-2022.12.1304.vsix',
        error => {
          if (error) {
            throw new Error('Failed to install Visual Studio Code Gitlens Extension')
          }

          console.log('[ Info ] VSCode Gitlens installed successfully.')

          resolve()
        }
      )
    })
  })
