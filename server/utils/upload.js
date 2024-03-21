import multer from "multer";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        
        console.log(file)

        if (file.fieldname == "photoDoctor") {
            cb(null, "uploads/doctors");
        }

        if (file.fieldname == "photoService") {
            cb(null, "uploads/services");
        }
    },

    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

export const upload = multer({ storage: storage })