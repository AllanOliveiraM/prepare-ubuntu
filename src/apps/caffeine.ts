import { container, run } from 'utils/execution'

export const installCaffeine = () =>
  container(async resolve => {
    console.log('[ Info ] Installing Caffeine...')

    run('sudo apt install caffeine -y', error => {
      if (error) {
        throw new Error('Failed to install Caffeine')
      }

      console.log('[ Info ] Caffeine installed successfully.')

      resolve()
    })
  })
