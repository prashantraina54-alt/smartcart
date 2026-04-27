// import { v2 as cloudinary } from 'cloudinary';
// import fs from 'fs'


// const uploadOnCloudinary = async (filePath) => {
//     console.log("CLOUD NAME:", process.env.CLOUDINARY_NAME);
// console.log("API KEY:", process.env.CLOUDINARY_API_KEY);
// console.log("API SECRET:", process.env.CLOUDINARY_API_SECRET);
//     cloudinary.config({ 
//         cloud_name: process.env.CLOUDINARY_NAME, 
//         api_key: process.env.CLOUDINARY_API_KEY , 
//         api_secret: process.env.CLOUDINARY_API_SECRET 
//     });
//     try {
//         if(!filePath){
//         return null
//     }
//     const uploadResult = await cloudinary.uploader.upload
//     (filePath)
//     fs.unlinkSync(filePath)
//     return uploadResult.secure_url

    
        
//     } catch (error) {
//         fs.unlinkSync(filePath)
//         console.log(error)
//     }
    
// }
// export default uploadOnCloudinary

import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';

const uploadOnCloudinary = async (filePath) => {
    try {
        // 🔴 Check file exists (CRITICAL)
        if (!filePath || !fs.existsSync(filePath)) {
            console.log("❌ File not found:", filePath);
            return null;
        }

        console.log("📂 Uploading:", filePath);

        const uploadResult = await cloudinary.uploader.upload(filePath, {
            timeout: 60000   // 🔴 prevent timeout issue
        });

        console.log("✅ Uploaded:", uploadResult.secure_url);

        // delete only if exists
        if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
        }

        return uploadResult.secure_url;

    } catch (error) {
        console.log("❌ Cloudinary Error:", error);

        if (filePath && fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
        }

        return null;
    }
};

export default uploadOnCloudinary;