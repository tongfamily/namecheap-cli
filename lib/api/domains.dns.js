const logger = require('winston')
const http = require("superagent")
const xml2js = require("xml2js")

const baseURL = "https://api.namecheap.com/xml.response"

module.exports.setDefault = function() {
  return new Promise((resolve, reject) => {
  })
}

module.exports.setCustom = function(domain, nameservers) {
  const command = 'namecheap.domains.dns.setCustom'
  const SLD = domain.split(".")[0]
  const TLD = domain.split(".")[1]

  logger.info('api.domains.dns.setCustom')

  return new Promise((resolve, reject) => {
    const url =
    `${baseURL}?ApiUser=${this.config.apiUser}&ApiKey=${this.config.apiKey}&UserName=${this.config.apiUser}&Command=${command}&ClientIp=${this.config.ipAddress}&TLD=${TLD}&SLD=${SLD}&NameServers=${nameservers}`
    logger.info(`namecheap.apicall`, { url });
     http
        .get(url)
        .end((error, response) => {
          if (error) { return reject(error) }

          xml2js.parseString(response.text, (error, xml) => {
            if (error) { return reject(error) }
            resolve(xml.ApiResponse.CommandResponse[0].DomainDNSSetCustomResult[0]['$'].Updated)
          })
        })
  })
}

module.exports.getList = domain => {
  const command = 'namecheap.domains.dns.getList'
  const SLD = domain.split(".")[0]
  const TLD = domain.split(".")[1]

  logger.info('api.domains.dns.getList')

  return new Promise((resolve, reject) => {
    const url =
    `${baseURL}?ApiUser=${apiUser}&ApiKey=${apiKey}&UserName=${this.config.apiUser}&Command=${command}&ClientIp=${clientIP}&TLD=${TLD}&SLD=${SLD}`
    logger.info(url)
     http
        .get(url)
        .end((error, response) => {
          if (error) { return reject(error) }

          xml2js.parseString(response.text, (error, xml) => {
            if (error) { return reject(error) }
            resolve(xml.ApiResponse.CommandResponse[0].DomainDNSGetListResult[0].Nameserver)
          })
        })
  })
}

module.exports.getHosts = function() {
  return new Promise((resolve, reject) => {
  })
}

module.exports.getEmailForwarding = function() {
  return new Promise((resolve, reject) => {
  })
}

module.exports.setEmailForwarding = function() {
  return new Promise((resolve, reject) => {
  })
}

module.exports.setHosts = function() {
  return new Promise((resolve, reject) => {
  })
}

