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

