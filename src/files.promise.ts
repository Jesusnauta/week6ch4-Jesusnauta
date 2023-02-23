import fs from 'fs/promises';

fs.writeFile('sample.txt', 'Promesa de rueva linea', { encoding: 'utf-8' })
  // eslint-disable-next-line arrow-body-style
  .then(() => {
    return fs.readFile('sample.txt', { encoding: 'utf-8' });
  })
  .then((data) => {
    console.log(data);
  });
