
import '../public/img.jpg';
import '../public/script.js';
import '../assets/file.ico';
import react from 'react';

require.ensure(['./randomChunk'], function(require) {
	var c = require('./randomChunk');
}, 'manifest');


module.exports = { client: true };
