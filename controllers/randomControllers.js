const { readFile } = require('node:fs/promises');
const { resolve } = require('node:path');

module.exports.home = async (req, res) =>{

    try {
        const filePath = resolve(__dirname, '..', 'public/data', 'jokes.json');
        const contents = await readFile(filePath, { encoding: 'utf8' });
        const data = JSON.parse(contents);
       res.render('pages/jokes/random', { jokes: data });

    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }

}