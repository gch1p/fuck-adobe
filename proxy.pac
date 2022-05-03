function FindProxyForURL(url, host) {
    if (     shExpMatch(host, "*.adobe.com") || host == "adobe.com"
          || shExpMatch(host, "*.adobelogin.com") || host == "adobelogin.com"
          || shExpMatch(host, "*.adobe.io") || host == "adobe.io") {
        return "SOCKS 127.0.0.1:56789";
    }
    return "DIRECT";
}
