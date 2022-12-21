import { container, run } from 'utils/execution'

export const installGnomeTweaks = () =>
  container(async resolve => {
    console.log('[ Info ] Installing Gnome Tweaks...')

    run('sudo apt install gnome-tweaks -y', error => {
      if (error) {
        throw new Error('Failed to install Gnome Tweaks')
      }

      console.log('[ Info ] Gnome Tweaks installed successfully.')

      resolve()
    })
  })
