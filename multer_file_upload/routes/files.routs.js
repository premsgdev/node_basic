module.exports = (app, router, upload) => {

    const controller = require('../controller/files.controller')

    router.post('/upload', upload.single('file'),controller.uploadFile)
    router.post('/uploads', upload.array('file',3),controller.uploadFile)
    app.use(router)
}