var configValues = require('./config');

module.exports = {
	getDbConnectionString: function() {
		return 'mongodb://'+configValues.uname+':'+configValues.pwd+'@ds157712.mlab.com:57712/machelsky';
	}
}