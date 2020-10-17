import multer from 'multer';
import path from 'path';

export default {
  storage: multer.diskStorage({
    destination: path.join(__dirname, '..', '..', 'uploads'),
    filename: (request, file, cb) => {
      //dar nome ao arquivo
      const fileName = `${Date.now()}-${file.originalname}`;
      
      //(erro, nome do arquivo)
      cb(null, fileName);
    }
  })
}