import { getSettings } from 'utils/definitions'

const settings = getSettings()

export const install = (app: string, func: () => Promise<unknown>, deps?: string[]) => {
  if (settings.apps[app] === undefined) {
    console.error(`[ Error ] '${app}' is not allowed app.`)

    process.exit(1)
  }

  if (settings.apps[app]) {
    if (deps) {
      const result = deps.every(dep => settings.apps[dep])

      if (!result) {
        console.error(
          `[ Error ] The app '${app}' needs these '${deps.join(
            ', '
          )}' dependencies to be install.`
        )

        process.exit(1)
      }
    }

    return func()
  }

  console.log(`[ Info ] ${app} skipped by settings.`)
}
