const { handleHttpError } = require('../utils/handleErrors');
const { S3Client, GetObjectCommand } = require('@aws-sdk/client-s3');
const { getSignedUrl } = require('@aws-sdk/s3-request-presigner');

const s3 = new S3Client({
  credentials:{
    accessKeyId: process.env.AWS_ACCESSKEY,
    secretAccessKey: process.env.AWS_SECRETKEY
  },
  region: process.env.AWS_BUCKETREGION,
});


const getImages = async (data) => {
  try{
    const params = {
      Bucket: process.env.AWS_BUCKET,
      Key: `${data[0].filename}`,
    };
    const command = new GetObjectCommand(params);
    const url = await getSignedUrl(s3, command, { expiresIn: 600 });

    console.log('SUCCESSFULLY DECODED');
    return url
  }catch (e){
    console.log(e, 'ERROR DE HANDLER');
    handleHttpError(e, 'ERROR DEL HANDLER');
  }
};

module.exports = getImages;
