import csv2json from 'csvtojson';
import { dirWatcherEmitter } from './dirwatcher';

export default class Importer {
  constructor() {}

  listen() {
    dirWatcherEmitter.on('changed', (path) => {
      this.import(path);
    });
  }

  import(path) {
    return new Promise((() => {
      csv2json()
        .fromFile(path)
        .on('json',json =>{
          console.log(json);
        });
    }));
  }

  importSync(path) {
    csv2json()
      .fromFile(path)
      .on('json', json =>{
        console.log(json);
      });
  }
}
