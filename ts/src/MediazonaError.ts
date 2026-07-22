
import { Context } from './Context'


class MediazonaError extends Error {

  isMediazonaError = true

  sdk = 'Mediazona'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  MediazonaError
}

