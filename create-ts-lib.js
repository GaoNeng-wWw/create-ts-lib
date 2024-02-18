#!/usr/bin/env node
const { execSync } = require('child_process');
const {program} = require('commander');
const { 
    readFileSync,
    existsSync,
    readdirSync,
    mkdirSync,
    cpSync,
    writeFileSync
} = require('fs');
const chalk = require('chalk');
const {sep} = require('path');
const {resolve, join} = require('path');
const root = resolve('.');

const info = (msg) => console.log(chalk.white.bold(msg))
const success = (msg) => console.log(chalk.greenBright.bold(msg))
const warn = (msg) => console.log(chalk.yellow.bold(msg))

program
.argument('<name>')
.option('--no-git')
.option('--no-install')
.option('--npm')
.option('--pnpm')
.option('--yarn')
.action((name, {git})=>{
    const cmds = [
        git && 'git init',
    ]
    let packagesStr = readFileSync(join(__dirname, 'templates', 'package.json')).toString().replace(/\$\{name\}/gim, name === '.' ? resolve(name).split(sep).at(-1) : name);
    const package = JSON.parse(packagesStr);
    const projectPath = resolve(root, name === '.' ? '.' : name);
    if (existsSync(projectPath)){
        if (readdirSync(projectPath).length){
            console.log(`${projectPath} is not empty`);
            return;
        }
    } else {
        mkdirSync(projectPath);
    }
    const dirs = readdirSync(join(__dirname, 'templates'));
    dirs.forEach((dir) => {
        if (dir.includes('package.json')){
            return;
        }
        info(`Copy ${dir}`)
        cpSync(
            join(__dirname, 'templates', dir),
            join(projectPath, dir),
            {recursive: true}
        );
    })
    writeFileSync(join(projectPath, 'package.json'), JSON.stringify(package,null,2));
    info(execSync('git init').toString());
    success('Successed!');
    warn('Do not forget run npm install ')
})

program.parse(process.argv);