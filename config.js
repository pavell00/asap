module.exports = {
	port: 3000,
	dbConnectionString: 'postgres://postgres:223245@localhost:5432/employees',
	saltRounds: 2,
	jwtSecret: 'yo-its-a-secret',
	tokenExpireTime: '3m'
}
//don't store this file in repository, it's unsecure
