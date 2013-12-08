var RPC       = require('./rpc'),
    globals   = require('../../globals'),
    PeerArray = require('../../util/peerarray');


var MessageRPC = module.exports = RPC.extend({

  initialize: function(queried_peer, message) {
    if (arguments.length === 0) {
      this.supr();
    } else {
      this.supr(queried_peer, 'MESSAGE', [message]);
    }
  },

  getMessage: function() {
    return this.getParams(0);
  },

  normalizeParams: function() {
    return {
      message : this.getMessage()
    };
  },

  handleNormalizedParams: function(params) {
    if (typeof params.message !== 'string') {
      this.reject(new Error('non valid message query'));
    } else {
      this.params = [params.message];
    }
    return this;
  },

  normalizeResult: function() {
    return {};
  },

  handleNormalizedResult: function(result) {
    this.resolve();
  }
});