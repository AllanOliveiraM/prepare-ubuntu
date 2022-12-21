import { container, run } from 'utils/execution'

export const installSpotify = () =>
  container(async resolve => {
    console.log('[ Info ] Installing Spotify...')

    run(
      'curl -sS https://download.spotify.com/debian/pubkey_5E3C45D7B312C643.gpg | sudo apt-key add - ',
      error => {
        if (error) {
          throw new Error('Failed to install Spotify gpg public key')
        }

        run(
          'echo "deb http://repository.spotify.com stable non-free" | sudo tee /etc/apt/sources.list.d/spotify.list',
          error => {
            if (error) {
              throw new Error('Failed to install Spotify Sources List')
            }

            run('sudo apt update', () => {
              run('sudo apt install spotify-client -y', error => {
                if (error) {
                  throw new Error('Failed to install Spotify')
                }

                console.log('[ Info ] Spotify installed successfully.')

                resolve()
              })
            })
          }
        )
      }
    )
  })
