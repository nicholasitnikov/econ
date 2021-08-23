const csv = require('csv-parser');
const fs = require('fs');
const path =  require('path');

export default function handler(req, res) {

    const results = [];

    fs.createReadStream(path.join(__dirname, '..', '..', '../../pages/api/products/db.csv'))
        .pipe(csv())
        .on('data', (data) => results.push(data))
        .on('end', () => {
            res.status(200).json({ data: results })
        });
    
    
    

}