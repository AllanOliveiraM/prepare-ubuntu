import { container, run } from 'utils/execution'

export const installSlack = () =>
  container(async resolve => {
    console.log('[ Info ] Installing Slack...')

    run('sudo apt install ./pkg/slack-desktop-4.29.149-amd64.deb -y', error => {
      if (error) {
        throw new Error('Failed to install Slack')
      }

      console.log('[ Info ] Slack installed successfully.')

      resolve()
    })
  })
