if (process.title !== 'browser') {
  switch (process.env.KADOH_TRANSPORT) {

  case 'xmpp':
    //@browserify-ignore
    module.exports = require('./node-xmpp');
    break;

  default:
  case 'udp':
    //@browserify-ignore
    module.exports = require('./udp') ;
    break;

  }
} else {
  switch (process.env.KADOH_TRANSPORT) {

  default:
  case 'xmpp':
    module.exports = require('./strophe');
    break;

  case 'simudp':
    module.exports = require('./simudp');
    break;
  }
}