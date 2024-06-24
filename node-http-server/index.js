import http from 'http';

const server = http.createServer((request, response) => {
	if (request.url === '/favicon.ico') {
		response.writeHead(200, { 'content-type': 'image/x-icon' });
		response.end(Buffer.from('R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7', 'base64'));
		return;
	}

	response.writeHead(200, { 'Content-Type': 'text/plain' });
	console.log(`Accessed: ${new Date().toLocaleString()} - ${request.url}`);
	response.end('ok\n');
});

server.listen(80);
console.log('Running on localhost:80');
