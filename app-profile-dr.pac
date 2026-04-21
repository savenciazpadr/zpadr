//----------------------------------------------------------------------
//	SAVENCIA PROXY PAC - app-profile-dr.pac | 21/04/2026 - 09:15 | ST //
//----------------------------------------------------------------------

function FindProxyForURL(url, host)
{
	// RegExp for RFC1918
	var privateIP = /^(0|10|127|192\.168|172\.1[6789]|172\.2[0-9]|172\.3[01]|169\.254|192\.88\.99)\.[0-9.]+$/;
	
	// Resolves hostnames to an IP address. This function can be used to reduce the number of DNS lookups.
	var resolved_ip = dnsResolve(host);

	// Don't send non-FQDN or private IP auths to us
	if (isPlainHostName(host) || isInNet(resolved_ip, "192.0.2.0","255.255.255.0") || privateIP.test(resolved_ip))
	return "DIRECT";

	// Returns the Country and IP address
	var country = "${COUNTRY}";
	var ipAddress = "${SRCIP}";
	var tunnel2 = "${ZT2_REQUEST}";

	// ******** Exception DR ********
	if (shExpMatch(host, "*.savencia.com")
	||	shExpMatch(host, "*.savencia.net")
	||	shExpMatch(host, "*.easyvista.com")
	||	shExpMatch(host, "*.eliumcdn.com")
	||	shExpMatch(host, "*.domainoo.com")
	||	shExpMatch(host, "*.api.zsapi.net")
    )
	return "DIRECT";
}
