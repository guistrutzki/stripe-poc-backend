import morgan from 'morgan';

morgan.token<any>('body', req => {
  return JSON.stringify(req.body)
})

morgan.token<any, any>(`status`, (_, res) => {
  const status = (typeof res.headersSent !== `boolean`
  ? Boolean(res._header)
  : res.headersSent)
    ? res.statusCode
    : undefined

  const color =
  status >= 500
    ? 31 // red
    : status >= 400
    ? 33 // yellow
    : status >= 300
    ? 36 // cyan
    : status >= 200
    ? 32 // green
    : 0 // no color

    return `\x1b[${color}m${status}\x1b[0m`
})

const morganLogging = morgan(':method :status :url :body')

export { morganLogging }