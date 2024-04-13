const config = {
    port: process.env.PORT || 3000,
    database: 'mongodb://127.0.0.1:27017/healthcare_app_db',
    secretKey: '5a032dcce2675a62c8d8c10602b661ea4118080b978c9a92781e6b00732b67c7',
    nodeMode: "production",
};

module.exports = config;