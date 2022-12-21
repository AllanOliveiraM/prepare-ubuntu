import fs from 'fs'
import joi from 'joi'
import yaml from 'js-yaml'

type Settings = {
  apps: {
    [key: string]: boolean
  }
}

export const getSettings = () => {
  const doc = yaml.load(fs.readFileSync('settings.yml', 'utf8')) as Settings

  const validator = joi.object<Settings>({
    apps: joi
      .object({
        'vs-code': joi.boolean().required(),
        'vscode-eslint': joi.boolean().required(),
        'vscode-better-comments': joi.boolean().required(),
        'vscode-jsx-html-tags': joi.boolean().required(),
        'vscode-turbo-console-log': joi.boolean().required(),
        'vscode-markdownlint': joi.boolean().required(),
        'vscode-gitlens': joi.boolean().required(),
        'vscode-editor-config': joi.boolean().required(),
        'vscode-prettier': joi.boolean().required(),
        'vscode-auto-close-tag': joi.boolean().required(),
        'vscode-shell-format': joi.boolean().required(),
        'vscode-todo-tree': joi.boolean().required(),
        'vscode-env': joi.boolean().required(),
        'vscode-liveshare': joi.boolean().required(),
        'vscode-color-highlight': joi.boolean().required(),
        'vscode-material-icon-theme': joi.boolean().required(),
        'vscode-prisma': joi.boolean().required(),
        'vscode-liveserver': joi.boolean().required(),
        'vscode-omni': joi.boolean().required(),
        'vscode-javascript-booster': joi.boolean().required(),
        'vscode-css-auto-prefix': joi.boolean().required(),
        'vscode-auto-import': joi.boolean().required(),
        'vscode-styled-componets': joi.boolean().required(),
        'vscode-sass': joi.boolean().required(),
        'vscode-highlight-matching-tag': joi.boolean().required(),
        'vscode-mdx': joi.boolean().required(),
        gimp: joi.boolean().required(),
        chrome: joi.boolean().required(),
        caffeine: joi.boolean().required(),
        'gnome-tweaks': joi.boolean().required(),
        'gnome-shell-extensions': joi.boolean().required(),
        zsh: joi.boolean().required(),
        spotify: joi.boolean().required(),
        insomnia: joi.boolean().required(),
        slack: joi.boolean().required(),
      })
      .required(),
  })

  const result = validator.validate(doc)

  const errorMessage = result.error?.message

  if (errorMessage) {
    console.error('[ Error ] Invalid configuration file\n')

    console.error(`Error: \n${errorMessage}\n\n\n`)

    process.exit(1)
  }

  return doc
}
