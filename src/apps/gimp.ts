import { container, runLive } from 'utils/execution'

export const installGIMP = () =>
  container(async resolve => {
    console.log('[ Info ] Installing GIMP dependencies...')

    await runLive({
      command: 'sudo',
      args: ['apt', 'install', 'flatpak', '-y'],
      onClose(code) {
        if (code === 0) {
          console.log('[ Info ] Flatpak installed successfully!')
        }
      },
      onError(error) {
        console.error(error)

        throw new Error('Failed to install Flatpack.')
      },
    })

    console.log('[ Info ] Installing gnome-software-plugin-flatpak...')

    await runLive({
      command: 'sudo',
      args: ['apt', 'install', 'gnome-software-plugin-flatpak', '-y'],
      onClose(code) {
        if (code === 0) {
          console.log('[ Info ] gnome-software-plugin-flatpak installed successfully!')
        }
      },
      onError(error) {
        console.error(error)

        throw new Error('Failed to install gnome-software-plugin-flatpak')
      },
    })

    console.log('[ Info ] Installing GIMP Flatpack remote...')

    await runLive({
      command: 'sudo',
      args: [
        'flatpak',
        'remote-add',
        '--if-not-exists',
        'flathub',
        'https://flathub.org/repo/flathub.flatpakrepo',
      ],
      onClose(code) {
        if (code === 0) {
          console.log('[ Info ] GIMP Flatpack remote installed successfully!')
        }
      },
      onError(error) {
        console.error(error)

        throw new Error('Failed to install Flatpack Remotes')
      },
    })

    console.log('[ Info ] Installing GIMP Flatpack package...')

    await runLive({
      command: 'sudo',
      args: [
        'flatpak',
        'install',
        'https://flathub.org/repo/appstream/org.gimp.GIMP.flatpakref',
        '-y',
      ],
      onStdOut(data) {
        const output = data.toString('utf-8')

        console.clear()

        const installlingMessage = output.split('Instalando')?.[1]

        if (!installlingMessage) {
          const percentIndex = output.indexOf('%')

          if (percentIndex !== -1) {
            console.log(
              `Downloading: ${output[percentIndex - 2]}${output[percentIndex - 1]}${
                output[percentIndex]
              }\n`
            )

            return
          }

          console.log('[ Info ] Starting package download / installing... \n')
        }

        console.log(`[ Info ] Installing GIMP ${installlingMessage}`)
      },
      onClose(code) {
        if (code === 0) {
          console.clear()

          console.log('[ Info ] GIMP Flatpack package installed successfully!')
        }
      },
      onError(error) {
        console.error(error)

        throw new Error('Failed to install GIMP Flatpack package')
      },
    })

    resolve()
  })
