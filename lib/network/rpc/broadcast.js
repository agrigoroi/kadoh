var RPC       = require('./rpc'),
    globals   = require('../../globals'),
    PeerArray = require('../../util/peerarray');


var BroadcastRPC = module.exports = RPC.extend({

  initialize: function(queried_peer, thisid, message) {
    if (arguments.length === 0) {
      this.supr();
    } else {
      this.supr(queried_peer, 'BROADCAST', [thisid, message]);
    }
  },

  getMessage: function() {
    return this.getParams(1);
  },

  getID: function() {
    return this.getParams(0);
  },

  normalizeParams: function() {
    return {
      message : this.getMessage(),
      thisid: this.getID()
    };
  },

  handleNormalizedParams: function(params) {
    if (typeof params.message !== 'string') {
      this.reject(new Error('non valid message query'));
    } else {
      this.params = [params.thisid, params.message];
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