import { container, run } from 'utils/execution'

export const installVSCodePrisma = () =>
  container(async resolve => {
    console.log('[ Info ] Installing Visual Studio Code Prisma extension...')

    run('code -v', error => {
      if (error) {
        throw new Error(
          'Failed to install Visual Studio Code Prisma Extension - VSCode not found'
        )
      }

      run(
        'code --install-extension ./pkg/vs-code-extensions/Prisma.prisma-4.7.1.vsix',
        error => {
          if (error) {
            throw new Error('Failed to install Visual Studio Code Prisma Extension')
          }

          console.log('[ Info ] VSCode Prisma installed successfully.')

          resolve()
        }
      )
    })
  })
