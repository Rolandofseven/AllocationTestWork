import 'file-loader?name=[name].[ext]!./iocexample.html';
import "reflect-metadata";
import {interfaces, injectable, inject, Container} from "inversify";
import {IWarrior} from './warrior.ts'
import {IocContainer} from './IocContainer.ts'
import {TYPES} from './types'
import {IDataService} from './DataService'


const myContainer = IocContainer.getContainer();
const ninja = myContainer.get<IWarrior>(TYPES.Warrior);
const dataService = myContainer.get<IDataService>(TYPES.DataService);

console.log(ninja.fight()); // "cut!"
console.log(ninja.sneak()); // "hit!"


dataService.get('https://jsonplaceholder.typicode.com/posts')
    .then(data => console.log(Object.keys(data).length))
    .catch(reason => console.log(reason.message))