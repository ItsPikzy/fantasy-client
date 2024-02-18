'use strict'

const _ = require('lodash');
/**
 *  Config Object that used to store, whatsAppKey.
 *  And also API base urls.
 */

class ApiConfig {
  /**
   * Initiate with options
   * @param  {Object} options - should have these props:
   * isProduction, serverKey, clientKey
   */
  constructor(options = { whatsAppKey: '' }) {
    this.whatsAppKey = '';

    this.set(options);
  }

  /**
   * Return config stored
   * @return {Object} object contains whatsAppKey
   */
  get() {
    let currentConfig = {
      whatsAppKey : this.whatsAppKey
    };
    return currentConfig;
  }

  /**
   * Set config stored
   * @param {Object} options - object contains [whatsAppKey]
   */
  set(options) {
    let currentConfig = {
      whatsAppKey : this.whatsAppKey
    };
    const parsedOptions = _.pick(options,['whatsAppKey']);
    let mergedConfig = _.merge({},currentConfig,parsedOptions);

    this.whatsAppKey = mergedConfig.whatsAppKey;
  }

  /**
   * @return {String} core api base url
   */
  getWhatsAppApiBaseUrl() {
    return ApiConfig.WHATSAPP_BASE_URL;
  };
}

// Static vars
ApiConfig.WHATSAPP_BASE_URL = 'https://api.rmtid.xyz/whatsapp';

module.exports = ApiConfig;