'use strict'

const ApiConfig = require('./apiConfig');
const HttpClient = require('./httpClient');

/**
 * WhatsApp object used to do request to Fantasy RMT WhatsApp API
 */
class WhatsApp {
  constructor(options = { whatsAppKey: '' }) {
    this.apiConfig = new ApiConfig(options);
    this.httpClient = new HttpClient(this);
  }

  /**
   * Do `/status` API request to Fantasy RMT WhatsApp API
   * @param  {Object} parameter - object of WhatsApp API JSON body as parameter, will be converted to JSON (more params detail refer to: https://rmtid.xyz/docs/whatsapp)
   * @return {Promise} - Promise contains Object from JSON decoded response
   */
  status() {
    let apiUrl = this.apiConfig.getWhatsAppApiBaseUrl()+'/status';
    let responsePromise = this.httpClient.request(
      'get',
      '',
      apiUrl,
      null);
    return responsePromise;
  }

  /**
   * Do `/statusKey` API request to Fantasy RMT WhatsApp API
   * @param  {Object} parameter - object of WhatsApp API JSON body as parameter, will be converted to JSON (more params detail refer to: https://rmtid.xyz/docs/whatsapp)
   * @return {Promise} - Promise contains Object from JSON decoded response
   */
  statusKey() {
    let apiUrl = this.apiConfig.getWhatsAppApiBaseUrl()+'/v1/statusKey';
    let responsePromise = this.httpClient.request(
      'post',
      this.apiConfig.get().whatsAppKey,
      apiUrl,
      null);
    return responsePromise;
  }

  /**
   * Do `/sendMessage` API request to Fantasy RMT WhatsApp API
   * @param  {Object} parameter - object of WhatsApp API JSON body as parameter, will be converted to JSON (more params detail refer to: https://rmtid.xyz/docs/whatsapp)
   * @return {Promise} - Promise contains Object from JSON decoded response
   */
  sendMessage(parameter={}) {
    let apiUrl = this.apiConfig.getWhatsAppApiBaseUrl()+'/v1/sendMessage';
    let responsePromise = this.httpClient.request(
      'post',
      this.apiConfig.get().whatsAppKey,
      apiUrl,
      parameter);
    return responsePromise;
  }
}

module.exports = WhatsApp;