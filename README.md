Fantasy Client - Node JS
===============
[![NPM](https://nodei.co/npm/fantasy-client.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/fantasy-client/)

[![npm version](https://img.shields.io/npm/v/fantasy-client.svg?style=flat-square)](https://www.npmjs.org/package/fantasy-client)
[![Build Status](https://travis-ci.org/rizdaprasetya/fantasy-client.svg?branch=master)](https://travis-ci.org/rizdaprasetya/fantasy-client)
![NPM download/month](https://img.shields.io/npm/dm/fantasy-client.svg)
![NPM download total](https://img.shields.io/npm/dt/fantasy-client.svg)

Fantasy RMT ❤️ Node JS! 

This is the Official Node JS API client/library for Fantasy RMT API. Visit [https://rmtid.xyz](https://rmtid.xyz). More information about the product and see documentation at [http://docs.rmtid.xyz](https://docs.rmtid.xyz) for more technical details.

## 1. Installation

### 1.a Using NPM

```
npm install --save fantasy-client
```

### 1.b Manual Installation

If you are not using NPM, you can clone or [download](https://github.com/ItsPikzy/fantasy-client/archive/master.zip) this repository.
Then require from `index.js` file.

```javascript
let fantasyClient = require('./fantasy-client/index.js');
```

## 2. Usage

### 2.1 Choose Product

We currently have [1 fire product](https://docs.rmtid.xyz) you can use:
- [WhatsApp Api](#22A-whatsapp) - Send OTP/other messages with our bot [doc ref](https://docs.rmtid.xyz/whatsapp/)

Choose one that you think best for your unique needs.

### 2.2 Client Initialization and Configuration

Get your client key from [Fantasy Shop Dashboard](https://rmtid.xyz/shop)

Create API client object

```javascript
const fantasyClient = require('fantasy-client');
// Create Core API instance
let whatsaAppApi = new fantasyClient.WhatsApp({
  whatsAppKey : 'YOUR_WHATSAPP_KEY'
});
```

You can also re-set config using `whatsaAppApi.apiConfig.set( ... )`
example:

```javascript
const fantasyClient = require('fantasy-client');

// Create WhatsApp API instance, empty config
let whatsaAppApi = new fantasyClient.WhatsApp({
  whatsAppKey : 'YOUR_WHATSAPP_KEY'
});

// You don't have to re-set using all the options, 
// i.e. set whatsAppKey only
whatsaAppApi.apiConfig.set({whatsAppKey : 'YOUR_WHATSAPP_KEY'});
```

You can also set config directly from attribute
```javascript
const fantasyClient = require('fantasy-client');

// Create WhatsApp API instance, empty config
let whatsaAppApi = new fantasyClient.WhatsApp();

whatsaAppApi.apiConfig.whatsAppKey = 'YOUR_WHATSAPP_KEY';
```


### 2.2.A WhatsApp
You can see WhatsApp example [here](examples/whatsapp).

Available methods for `WhatsApp` class
```javascript
// return WhatsApp API /status response as Promise of Object
status()

// return WhatsApp API /statusKey for whatsAppKey as Promise of Object
statusKey()

// return WhatsApp API /sendMessage response as Promise of Object
sendMessage(phoneNumber, message)
```
`phoneNumber` & `message` is an object JSON of [WhatsApp Parameter](https://docs.rmtid.xyz/whatsapp/#json-objects)

## 3. Handling Error / Exception
When using function that result in WhatsApp API call e.g: `whatsAppApi.sendMessage(...)` 
there's a chance it may throw error (`FantasyError` object), the error object will contains below properties that can be used as information to your error handling logic:
```javascript
whatsAppApi.sendMessage(phoneNumber, message)
.then((res)=>{
  ///
})
.catch((e)=>{
  e.message // basic error message string
  e.httpStatusCode // HTTP status code e.g: 400, 401, etc.
  e.ApiResponse // JSON of the API response 
  e.rawHttpClientData // raw Axios response object
})
```

## 4. Advanced Usage
### Custom Http Client Config
Under the hood this API wrapper is using [Axios](https://github.com/axios/axios) as http client. You can override the default config. 

You can set via the value of this `<api-client-instance>.httpClient.http_client.defaults` object, like [described in Axios guide](https://github.com/axios/axios#global-axios-defaults). e.g:
```javascript
// create instance of api client
let whatsaAppApi = new fantasyClient.WhatsApp({
  whatsAppKey : 'YOUR_WHATSAPP_KEY'
});

// set Axios timeout config to 2500
whatsaAppApi.httpClient.http_client.defaults.timeout = 2500; 

// set custom HTTP header for every request from this instance
whatsaAppApi.httpClient.http_client.defaults.headers.common['My-Header'] = 'my-custom-value';
```
### Custom Http Client Interceptor
As Axios [also support interceptor](https://github.com/axios/axios#interceptors), you can also apply it here. e.g:
```javascript
// Add a request interceptor
whatsaAppApi.httpClient.http_client.interceptors.request.use(function (config) {
  // Do something before request is sent
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});
```

It can be used for example to customize/manipulate http request's body, header, etc. before it got sent to the destination API url.

## Examples
Examples are available on [/examples](/examples) folder.
There are:
- [WhatsApp examples](/examples/whatsapp)

## Notes

#### Not Designed for Frontend Usage
This library/package is mainly **NOT FOR FRONTEND** (Browser's javascript) usage, but for backend (Node JS server) usage:
- This is mainly for backend usage, to do **secure server-to-server/backend-to-backend API call**.
- You may/will encounter **CORS issue if you are using** this to do API request **from frontend**.
- Your API **WhatsAppKey may also be exposed to public** if you are using this **on frontend**.

## Get help

* [Fantasy RMT Docs](https://docs.rmtid.xyz)
* [Fantasy Shop Dashboard ](https://rmtid.xyz/shop)
* [WhatsApp Api documentation](http://docs.rmtid.xyz/whatsapp)
* Can't find answer you looking for? email to [support@rmtid.xyz](mailto:support@rmtid.xyz)