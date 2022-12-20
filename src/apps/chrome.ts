import { container, run } from 'utils/execution'

export const installGoogleChrome = () =>
  container(async resolve => {
    console.log('[ Info ] Installing Google Chrome...')

    run('sudo apt install ./pkg/google-chrome-stable_current_amd64.deb -y', error => {
      if (error) {
        throw new Error('Failed to install Google Chrome')
      }

      console.log('[ Info ] Google Chrome installed successfully.')

      resolve()
    })
  })
