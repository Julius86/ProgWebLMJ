module.exports = {
    port: process.env.PORT || 3000,
    db: process.env.MONGODB || 'mongodb+srv://Julius86:12345@cluster0.kewfy.mongodb.net/DB_ProgWeb?retryWrites=true&w=majority',

    urlParser: {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    }
}