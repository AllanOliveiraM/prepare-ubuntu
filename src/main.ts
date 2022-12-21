import { installCaffeine } from 'apps/caffeine'
import { installGoogleChrome } from 'apps/chrome'
import { installGIMP } from 'apps/gimp'
import { installGnomeShellExtensions } from 'apps/gnome-shell-extensions'
import { installGnomeTweaks } from 'apps/gnome-tweaks'
import { installInsomnia } from 'apps/insomnia'
import { installSlack } from 'apps/slack'
import { installSpotify } from 'apps/spotify'
import { performVSCodeExtensionsInstall } from 'apps/vs-code-extensions/manager'
import { installVSCode } from 'apps/vscode'
import { installZsh } from 'apps/zsh'

import { install } from 'utils/install'

const init = async () => {
  console.clear()

  await install('vs-code', () => installVSCode())

  await performVSCodeExtensionsInstall()

  await install('gimp', () => installGIMP())

  await install('chrome', () => installGoogleChrome())

  await install('gnome-tweaks', () => installGnomeTweaks())

  await install('gnome-shell-extensions', () => installGnomeShellExtensions(), [
    'gnome-tweaks',
  ])

  await install('caffeine', () => installCaffeine(), [
    'gnome-tweaks',
    'gnome-shell-extensions',
  ])

  await install('spotify', () => installSpotify())

  await install('zsh', () => installZsh())

  await install('insomnia', () => installInsomnia())

  await install('slack', () => installSlack())

  console.log("\n> That's it!")
}

init()
