import fs from 'fs';

const data = fs.readFileSync('sample.txt', { encoding: 'utf-8' });
console.log(data);

fs.writeFileSync('sample.txt', 'nueva linea', { encoding: 'utf-8' });

fs.appendFile('sample.txt', '\nLinea añadida', { encoding: 'utf-8' }, () => {
  fs.readFile('sample.txt', { encoding: 'utf-8' }, (_error, data) => {
    console.log('Async');
    console.log(data);
  });
});
