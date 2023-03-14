const aws = require('aws-sdk');
const multer = require('multer');
// const multerS3 = require('multer-s3');
const { handleHttpError } = require('./handleErrors');


const S3 = new aws.S3({
    accessKeyId: process.env.AWS_ACCESSKEY,
    secretAccessKey: process.env.AWS_SECRETKEY,
    region: process.env.AWS_BUCKETREGION,
});


// const storage = multer.memoryStorage({
//     destination: function (req, file, cb) {
//         cb(null, '')
//     }
// });

// const uploadFile = multer({ storage }).single("cvFile");

// const awsUpload = multer({ storage });

const awsUpload = async (file) => {
    try{
        const ext = file.originalname.split(".").pop();
        const string = file.originalname.split(".").shift();
        const name = string.replace(/\s/g,"_");
        const fileName = `file-${Date.now()}-${name}.${ext}`;
        const params = {
            Bucket: process.env.AWS_BUCKET,
            Key: `cvFile/${fileName}`,
            Body: file.buffer,
        };

        const uploadingRes = S3.upload(params, (err, data) => {
            if (err){
                handleHttpError(err, 'Error uploading file to aws');
            }
            return data
        }).promise();
        return uploadingRes;
    }catch(e){
        console.log(e);
        handleHttpError(res, 'Error sending to aws');

    }
};


module.exports = awsUpload;
