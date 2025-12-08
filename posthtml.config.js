const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  plugins: {
    "posthtml-expressions": {
      locals: {
        CV_WEB_LINK: process.env.CV_WEB_LINK,
        CV_PDF_LINK: process.env.CV_PDF_LINK,
      },
    },
  },
};

