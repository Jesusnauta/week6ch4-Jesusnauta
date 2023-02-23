import { program } from 'commander';
import inquirer from 'inquirer';

program.option('--install').option('-v, --version');

program.parse();

const options = program.opts();
if (options.version) {
  console.log('Version 1');
}

console.log('Hello sample');

const courses = ['Angular', 'React', 'Vue'];

inquirer
  .prompt([
    {
      name: 'userName',
      message: 'Dime tu nombre',
      type: 'input',
    },
    {
      name: 'userAge',
      message: 'Dime tu edad',
      type: 'number',
    },
    {
      name: 'course',
      message: 'Selecciona un curso',
      type: 'list',
      choices: courses,
    },
    {
      name: 'coursesMulti',
      message: 'Selecciona algun/algunos cursos',
      type: 'checkbox',
      choices: courses,
    },
    {
      name: 'ok',
      message: 'Aceptas ....',
      type: 'confirm',
    },
  ])

  .then((answers) => {
    console.log('Hello', answers.userName);
  });
