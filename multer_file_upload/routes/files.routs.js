module.exports = (app, router, upload) => {

    const controller = require('../controller/files.controller')

    router.post('/upload', upload.single('file'),controller.uploadFile)
    app.use(router)
}