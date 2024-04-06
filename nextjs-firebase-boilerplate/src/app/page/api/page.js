// pages/api/upload.js
import formidable from 'formidable';
import fs from 'fs';
import path from 'path';

export const config = {
  api: {
    bodyParser: false,
  },
};

const uploadHandler = async (req, res) => {
  const form = new formidable.IncomingForm();
  form.uploadDir = './public/uploads';
  form.keepExtensions = true;

  form.parse(req, (err, fields, files) => {
    if (err) {
      console.error('Error parsing form:', err);
      res.status(500).json({ error: 'Error parsing form' });
      return;
    }

    const { file } = files;
    const tempPath = file.path;
    const fileName = file.name;

    // Move file to final location
    const newFilePath = path.join(form.uploadDir, fileName);
    fs.rename(tempPath, newFilePath, (err) => {
      if (err) {
        console.error('Error moving file:', err);
        res.status(500).json({ error: 'Error moving file' });
        return;
      }
      console.log('File uploaded:', fileName);
      res.status(200).json({ success: true });
    });
  });
};

export default uploadHandler;
