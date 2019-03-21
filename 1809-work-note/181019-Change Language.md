# Change Language

```js
// changeLang
import Vue from 'vue'
import { docCookies } from '@/utils/cookieMethods'
let changeLang = function(lang) {
  let nowLang = Vue.config.lang
  let nowaday = new Date()
  let expiredays = new Date(nowaday.getTime() + 365 * 24 * 60 * 60 * 1000)
  if (lang && lang !== nowLang && (lang === 'zh-CN' || lang === 'en')) {
    Vue.config.lang = nowLang = lang
  } else if (lang === '' || lang === undefined) {
    Vue.config.lang = nowLang = (nowLang === 'zh-CN' ? 'en' : 'zh-CN')
  }
  docCookies.setItem('lang', nowLang, expiredays)
}

export default changeLang

```

```js
// cookie setting 
export const docCookies = {
  getItem: function(sKey) {
    return (
      decodeURIComponent(
        document.cookie.replace(
          new RegExp(
            '(?:(?:^|.*;)\\s*' +
              encodeURIComponent(sKey).replace(/[-.+*]/g, '\\$&') +
              '\\s*=\\s*([^;]*).*$)|^.*$'
          ),
          '$1'
        )
      ) || null
    )
  },
  setItem: function(sKey, sValue, vEnd, sPath, sDomain, bSecure) {
    if (!sKey || /^(?:expires|max-age|path|domain|secure)$/i.test(sKey)) {
      return false
    }
    var sExpires = ''
    if (vEnd) {
      switch (vEnd.constructor) {
        case Number:
          sExpires =
            vEnd === Infinity
              ? '; expires=Fri, 31 Dec 9999 23:59:59 GMT'
              : '; max-age=' + vEnd
          break
        case String:
          sExpires = '; expires=' + vEnd
          break
        case Date:
          sExpires = '; expires=' + vEnd.toUTCString()
          break
      }
    }
    document.cookie =
      encodeURIComponent(sKey) +
      '=' +
      encodeURIComponent(sValue) +
      sExpires +
      (sDomain ? '; domain=' + sDomain : '') +
      (sPath ? '; path=' + sPath : '') +
      (bSecure ? '; secure' : '')
    return true
  },
  removeItem: function(sKey, sPath, sDomain) {
    if (!sKey || !this.hasItem(sKey)) {
      return false
    }
    document.cookie =
      encodeURIComponent(sKey) +
      '=; expires=Thu, 01 Jan 1970 00:00:00 GMT' +
      (sDomain ? '; domain=' + sDomain : '') +
      (sPath ? '; path=' + sPath : '')
    return true
  },
  hasItem: function(sKey) {
    return new RegExp(
      '(?:^|;\\s*)' +
        encodeURIComponent(sKey).replace(/[-.+*]/g, '\\$&') +
        '\\s*='
    ).test(document.cookie)
  },
  keys: /* optional method: you can safely remove it! */ function() {
    var aKeys = document.cookie
      .replace(/((?:^|\s*;)[^=]+)(?=;|$)|^\s*|\s*(?:=[^;]*)?(?:\1|$)/g, '')
      .split(/\s*(?:=[^;]*)?;\s*/)
    for (var nIdx = 0; nIdx < aKeys.length; nIdx++) {
      aKeys[nIdx] = decodeURIComponent(aKeys[nIdx])
    }
    return aKeys
  }
}

```

```js
//发送请求

/*
  @params:
  config: 发起请求配置对象  type: Object
  requestParams: 每次发起请求添加的参数   type: Object
*/

export default function setRequestConfig(config, requestParams = {}) {
  let type = getDataType(config)
  if (type !== 'Object') {
    return false
  }

  for (let key in requestParams) {
    if (requestParams.hasOwnProperty(key)) {
      if (config.method === 'get') {
        let url = config.url
        let regExp = /(\w+)=(\w+)/ig
        let params = {}
        url.replace(regExp, function(match, matchExp1, matchExp2) {
          params[matchExp1] = matchExp2
        })
        if (params.action !== 'uploadQRCode' && params.action !== 'checkCard') {
          if (!config.params) {
            config.params = {}
          }
          config.params[key] = requestParams[key]
        }
      } else if (config.method === 'post') {
        let type = getDataType(config.data)
        if (type !== 'FormData') {
          if (!config.data) {
            config.data = ''
          }
          let and = config.data && config.data.length ? '&' : ''
          config.data += `${and}${key}=${requestParams[key]}`
        }
      }
    }
  }
  return config
}

function getDataType(data) {
  return Object.prototype.toString.call(data).replace(/\[object\s|\]/g, '')
}

```