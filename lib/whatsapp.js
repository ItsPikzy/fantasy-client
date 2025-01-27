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
   * @param  {Object} parameter - object of WhatsApp API JSON body as parameter, will be converted to JSON (more params detail refer to: https://docs.rmtid.xyz/whatsapp)
   * @return {Promise} - Promise contains Object from JSON decoded response
   */
  status() {
    let apiUrl = this.apiConfig.getWhatsAppApiBaseUrl('/status');
    let responsePromise = this.httpClient.request(
      'get',
      '',
      apiUrl);
    return responsePromise;
  }

  /**
   * Do `/statusKey` API request to Fantasy RMT WhatsApp API
   * @param  {Object} parameter - object of WhatsApp API JSON body as parameter, will be converted to JSON (more params detail refer to: https://docs.rmtid.xyz/whatsapp)
   * @return {Promise} - Promise contains Object from JSON decoded response
   */
  statusKey() {
    let apiUrl = this.apiConfig.getWhatsAppApiBaseUrl('/v1/statusKey');
    let responsePromise = this.httpClient.request(
      'post',
      this.apiConfig.get().whatsAppKey,
      apiUrl);
    return responsePromise;
  }

  /**
   * Do `/sendMessage` API request to Fantasy RMT WhatsApp API
   * @phoneNumber  {Number} parameter - object of WhatsApp API JSON body as parameter, will be converted to JSON (more params detail refer to: https://docs.rmtid.xyz/whatsapp)
   * @message  {String} parameter - object of WhatsApp API JSON body as parameter, will be converted to JSON (more params detail refer to: https://docs.rmtid.xyz/whatsapp)
   * @return {Promise} - Promise contains Object from JSON decoded response
   */
  sendMessage(phoneNumber, message) {
    let apiUrl = this.apiConfig.getWhatsAppApiBaseUrl('/v1/sendMessage');
    let responsePromise = this.httpClient.request(
      'post',
      this.apiConfig.get().whatsAppKey,
      apiUrl,
      { phoneNumber, message });
    return responsePromise;
  }
}

module.exports = WhatsApp;