'use strict'

const { URL } = require('url');
const _ = require('lodash');
/**
 *  Config Object that used to store, whatsAppKey.
 *  And also API base urls.
 */

class ApiConfig {
  /**
   * Initiate with options
   * @param  {Object} options - should have these props:
   * whatsAppKey
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
   * @param {String} newPath - add new path or not
   * @return {String} core api base url
   */
  getWhatsAppApiBaseUrl(newPath = '/') {
    const originalUrl = new URL(ApiConfig.WHATSAPP_BASE_URL);
    originalUrl.pathname = `${originalUrl.pathname}/${newPath}`;
    return originalUrl.toString().replace(/([^:]\/)\/+/g, "$1");
  }
}

// Static vars
ApiConfig.WHATSAPP_BASE_URL = 'https://api.rmtid.store/whatsapp';

module.exports = ApiConfig;