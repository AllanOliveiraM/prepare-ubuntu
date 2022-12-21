import { container, run } from 'utils/execution'

export const installVSCode = () =>
  container(async resolve => {
    console.log('[ Info ] Installing Visual Studio Code...')

    run('sudo apt install ./pkg/code_1.74.0-1670260027_amd64.deb -y', error => {
      if (error) {
        throw new Error('Failed to install Visual Studio Code')
      }

      console.log('[ Info ] VSCode installed successfully.')

      resolve()
    })
  })
