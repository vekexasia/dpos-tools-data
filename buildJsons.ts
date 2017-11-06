import * as jsYaml from 'js-yaml';
import * as fs from 'fs';

const writeData = (baseDir: string, coin: string, key: string, content: any) => {
  if (typeof(content) === 'undefined' || content === null) {
    return;
  }
  fs.writeFileSync(`${baseDir}/${key}.json`, JSON.stringify(content, null, 2));
  fs.writeFileSync(`${baseDir}/${key}.min.json`, JSON.stringify(content));
  fs.writeFileSync(`${baseDir}/${key}.js`, `__${coin}_${key}(${JSON.stringify(content, null, 2)});`);
  fs.writeFileSync(`${baseDir}/${key}.min.js`, `__${coin}_${key}(${JSON.stringify(content)});`);
}

fs.readdirSync(__dirname)
  .filter((item) => /.yml$/.test(item))
  .filter((item) => item !== '.travis.yml')
  .forEach((ymlFile) => {
    const content: string = fs.readFileSync(`${__dirname}/${ymlFile}`, 'utf8') as string;
    const [coin]          = ymlFile.split('.');
    const allContent      = jsYaml.load(content);
    const baseDir         = `${__dirname}/jsons/${coin}`;
    console.log(`Generating infos for ${ymlFile} - ${coin}`);
    fs.mkdirSync(baseDir);

    writeData(baseDir, coin, 'indexedReqs', allContent.indexedRequirements);
    writeData(baseDir, coin, 'groups', allContent.groups);
    writeData(baseDir, coin, 'pools', allContent.pools);
    writeData(baseDir, coin, 'allInfos', allContent);
  });

