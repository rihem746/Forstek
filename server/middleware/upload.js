import path from 'path';
import multer from 'multer';


var storage= multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,'uploads')
    },
    filename: function(req,file,cb){ 
        cb(null,Date.now()+'-'+file.originalname)

    }
})

var upload= multer({
    storage: storage,
    fileFilter: function(req,file,callback){
        if (
            file.mimetype == "application/pdf"
        ){
            callback(null,true)
        }else {
            console.log( "seulement pdf bb ")
            callback(null,false)
        }
    },
    limits:{
        fileSize: 1024 * 1024 * 15
    }
})

export default upload ;