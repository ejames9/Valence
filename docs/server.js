/*
** Simple Node.js Developement Server.
** Author: Eric Foster
*/

// Get http connection module..
const
  connect = require('connect')
// Get static server module..
  server = require('serve-static')

connect()
  .use(server('./'))
  .listen(8099)

console.log(
  'Server running on port 8099. Jesus is King!'
)
