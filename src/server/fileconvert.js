const fs = require('fs');
const csv = require('csv-parser');

function write(filename, data) {
    let writeStream = fs.createWriteStream(`../public/output/${filename}.json`, 'utf-8');
    writeStream.write(JSON.stringify(data, null, 2));
}


function getSingleData(filename, callback) {
    const results = [];
    fs.createReadStream(`../data/${filename}.csv`)
        .pipe(csv())
        .on('data', (data) => results.push(data))
        .on('end', () => {
            callback(results);
        });
}

function getBothData(filename1,filename2,callback){
    const file1Results = [];
    const file2Results = [];
    fs.createReadStream(`../data/${filename1}.csv`)
        .pipe(csv())
        .on('data', (data) => file1Results.push(data))
        .on('end', () => {
            fs.createReadStream(`../data/${filename2}.csv`)
                .pipe(csv())
                .on('data', (data) => file2Results.push(data))
                .on('end',() => {
                    callback(file1Results,file2Results);
                })
        });
}

exports.getBothData = getBothData;
exports.getSingleData = getSingleData;
exports.write = write;