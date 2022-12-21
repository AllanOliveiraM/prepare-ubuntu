const { exec, spawn } = require('child_process')

export const run = (
  command: string,
  callback?: (err: unknown, stdout: unknown, stderr: unknown) => void
) => {
  exec(command, callback)
}

type RunLiveParams = {
  command: string
  args: string[]
  onStdOut?: (data: Buffer) => void
  onStdErr?: (error: Buffer) => void
  onError?: (error: unknown) => void
  onClose?: (code: unknown) => void
}

export const runLive = ({
  command,
  args,
  onStdOut,
  onStdErr,
  onError,
  onClose,
}: RunLiveParams) =>
  new Promise((resolve, reject) => {
    const childProcess = spawn(command, args)

    childProcess.stdout.on('data', (data: Buffer) => {
      if (onStdOut) onStdOut(data)
    })

    childProcess.stderr.on('data', (data: Buffer) => {
      if (onStdErr) onStdErr(data)
    })

    childProcess.on('error', (error: unknown) => {
      if (onError) onError(error)

      reject(error)
    })

    childProcess.on('close', (code: unknown) => {
      if (onClose) onClose(code)

      resolve(code)
    })
  })

export const container = (func: (res: (value?: unknown) => void) => Promise<void>) =>
  new Promise(resolve => {
    try {
      func(resolve)
    } catch (error) {
      console.error(error)
    }
  })
