# Namecheap CLI

## Installation

````
npm install -g namecheap-cli
````

## Usage

````
namecheap -h
Usage: namecheap [options] [command]

Options:
  -h, --help                                       output usage information

Commands:
  check <domain>
  domains.dns.getList <domain>
  domains.dns.setCustom <domain> [nameservers]
  ssl.getList
  ssl.activate <certificateId> <domain> <csrPath>
  ssl.getInfo <certificateId>
  domains.create <domain>
  domains.getList
````

## Configuration

This requires that you set some environment variables for it to work. You need to get a token from Namecheap and
then you should set the variable in the `config.js`

o use the namecheap CLI tool, you'll need to request API access in your namecheap account.

https://www.namecheap.com/support/api/intro/

The Namecheap API appears to require your clients to use a static IP, so it's really more designed for resellers than pure CLI access. NamecheapClient.js appears to use Node's config package https://www.npmjs.com/package/config

So set 
```
   NAMECHEAP_CLIENT_IP_ADDRESS
   NAMECHEAP_API_KEY
   NAMECHEAP_API_USE
```
