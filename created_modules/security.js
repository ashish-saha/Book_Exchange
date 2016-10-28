var crypto = require('crypto');
var algorithm = 'aes-256-gcm';
var crypto_password = 'JXpHDTO24DF6EzmGLdJMx0TjBRLOzTS9lOL332t4';

var security = {};

security.generateIV = function(){
	return crypto.randomBytes(12);
};

security.encrypt = function(text, iv){
	var cipher = crypto.createCipheriv(algorithm, crypto_password, iv);
	var encrypted = cipher.update(text, 'utf8', 'hex');
	encrypted += cipher.final('hex');
	var tag = cipher.getAuthTag();
	return {content: encrypted, tag: tag};
};

security.decrypt = function(encrypted, iv) {
  var decipher = crypto.createDecipheriv(algorithm, crypto_password, iv);
  decipher.setAuthTag(encrypted.tag.buffer);
  var dec = decipher.update(encrypted.content, 'hex', 'utf8');
  dec += decipher.final('utf8');
  return dec;
};

module.exports = security;