const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads/");
  },
  filename: function (req, file, cb) {
    const date = new Date();
    cb(null, date.toDateString() + " - " + file.originalname);
  },
});

// const storage = multer.memoryStorage()

const upload = multer({ storage: storage });

module.exports = upload;
