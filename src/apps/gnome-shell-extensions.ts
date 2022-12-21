import { container, run } from 'utils/execution'

export const installGnomeShellExtensions = () =>
  container(async resolve => {
    console.log('[ Info ] Installing Gnome Shell Extensions...')

    run('sudo apt install gnome-shell-extensions -y', error => {
      if (error) {
        throw new Error('Failed to install Gnome Shell Extensions')
      }

      console.log('[ Info ] Gnome Shell Extensions installed successfully.')

      resolve()
    })
  })
