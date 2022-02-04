const middleware = {}

middleware['redirect'] = require('..\\middleware\\redirect.ts')
middleware['redirect'] = middleware['redirect'].default || middleware['redirect']

export default middleware
