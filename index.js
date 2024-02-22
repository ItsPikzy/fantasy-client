const version = require('./package.json').version;
const WhatsApp = require('./lib/whatsapp');
const FantasyError = require('./lib/fantasyError');
const FantasyRMT = {
  version,
  WhatsApp,
	FantasyError 
}

module.exports = FantasyRMT;