# Whoopsies!


# Server status code 204
The server successfully processed the request, and is not returning any content.
# Server status code 205
The server successfully processed the request, asks that the requester reset its document view, and is not returning any content.
# Server status code 206
The server is delivering only part of the resource (byte serving) due to a range header sent by the client. The range header is used by HTTP clients to enable resuming of interrupted downloads, or split a download into multiple simultaneous streams.
# Server status code 218
# Server status code 403
The request contained valid data and was understood by the server, but the server is refusing action. This may be due to the user not having the necessary permissions for a resource or needing an account of some sort, or attempting a prohibited action (e.g. creating a duplicate record where only one is allowed). This code is also typically used if the request provided authentication by answering the WWW-Authenticate header field challenge, but the server did not accept that authentication. The request should not be repeated.
# Server status code 408
The server timed out waiting for the request. According to HTTP specifications: "The client did not produce a request within the time that the server was prepared to wait. The client MAY repeat the request without modifications at any later time.
# Server status code 418
# Server status code 419
Used by the Laravel Framework when a CSRF Token is missing or expired.
# Server status code 501
The server either does not recognize the request method, or it lacks the ability to fulfil the request. Usually this implies future availability (e.g., a new feature of a web-service API).
# Server status code 503
The server cannot handle the request (because it is overloaded or down for maintenance). Generally, this is a temporary state.
# Cloudflare error code 521
The origin server refused connections from Cloudflare. Security solutions at the origin may be blocking legitimate connections from certain Cloudflare IP addresses.
# Server status code 529
The site can't process the request.
# Server status code 530
Site has been frozen due to overactivity.
