import { container, run } from 'utils/execution'

export const installInsomnia = () =>
  container(async resolve => {
    console.log('[ Info ] Installing Insomnia...')

    run(
      'echo "deb [trusted=yes arch=amd64] https://download.konghq.com/insomnia-ubuntu/ default all" | sudo tee -a /etc/apt/sources.list.d/insomnia.list',
      error => {
        if (error) {
          throw new Error('Failed to install Insomnia Sources List')
        }

        run('sudo apt update', () => {
          run('sudo apt install insomnia -y', error => {
            if (error) {
              throw new Error('Failed to install Insomnia')
            }

            console.log('[ Info ] Insomnia installed successfully.')

            resolve()
          })
        })
      }
    )
  })
