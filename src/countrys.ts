import fs from 'fs/promises';

const newCountry = { name: 'Italia', capital: 'Milano' };

export const addCountry = async (country: { [key: string]: string }) => {
  const stringDataInitial = await fs.readFile('data.json', {
    encoding: 'utf-8',
  });
  const data: { [key: string]: string }[] = JSON.parse(stringDataInitial);
  data.push(country);
  const stringData = JSON.stringify(data);
  fs.writeFile('data.json', stringData, { encoding: 'utf-8' });
};

addCountry(newCountry);
