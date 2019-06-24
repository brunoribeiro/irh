module.exports = Object.freeze({
    MONGO_HOST: process.env.MONGODB_HOST || 'mongo',
    MONGO_DB:  process.env.MONGODB_DB || 'movies',
    MONGO_PORT:  process.env.MONGODB_PORT || '27017'
});