import { articleTypes } from '../src/components/article_card_list/functions.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Get the current file's directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const blogArticlesPath = path.join(__dirname, `../public/articles/${articleTypes["blog"]}`);
const projectArticlesPath = path.join(__dirname, `../public/articles/${articleTypes["project"]}`);

function generateArticleDirs(directoryPath) {
    fs.readdir(directoryPath, { withFileTypes: true }, (err, files) => {
        if (err) {
            console.log('Error getting directory information.');
            console.error(err);
            return;
        }
      
        let articleDirectories = files.filter(file => file.isDirectory()).map(file => file.name);
      
        fs.writeFile(directoryPath + '/directories.json', JSON.stringify(articleDirectories), (err) => {
            if (err) throw err;
            console.log('Article directories list has been saved!');
        });
    });
}

generateArticleDirs(blogArticlesPath);
generateArticleDirs(projectArticlesPath);