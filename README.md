# @electron/check-python-tls

> Checks if your version of python supports TLS1.2

## How?

```bash
npx @electron/check-python-tls
```

A handy message will be printed out saying either your version of python is OK
or telling you you need to update.

## Why?

As of some time in 2018 GitHub only supports TLS 1.2 and higher, the default
version of python on some distributions does not support this version of TLS.

This helper is a small script that checks your local install of python to see
what version of TLS it supports.

## How do I fix it?

### Windows

Install the latest version of Python 2 from the [Python Website](https://www.python.org/downloads/windows/)

### macOS

```bash
brew install python@2
```

### Linux

Look around for the distribution specific upgrade instructions
