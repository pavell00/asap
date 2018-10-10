const jwt = require('jsonwebtoken');
const config =  require('../config');

const checkAuth = (req, res, next) => {
	var token = req.headers['token'];
	if (!token)
		return res.status(403).send({ success: false, message: 'No token provided.' });

	jwt.verify(token, config.jwtSecret, (err, decoded) => {
		if (err)
			return res.status(500).send({ success: false, message: 'Failed to authenticate token.' });

    req.user = {
			login: decoded.login,
			id: decoded.id,
			time: decoded.time,
			iat: decoded.iat,
			exp: decoded.exp,
		};
	//console.log(req.user);
    next();
	});
}

module.exports = {
	checkAuth
}
