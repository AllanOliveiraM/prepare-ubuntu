import { container, run } from 'utils/execution'

export const installZsh = () =>
  container(async resolve => {
    console.log('[ Info ] Installing Zsh...')

    run('sudo apt install zsh -y', error => {
      if (error) {
        throw new Error('Failed to install Zsh')
      }

      console.log('[ Info ] Zsh installed successfully.')

      run('sudo chsh -s $(which zsh)')

      resolve()
    })
  })
