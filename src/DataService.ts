import "reflect-metadata";
import { interfaces, injectable, inject, Container } from "inversify";
import {IThrowableWeapon, Shuriken} from './ThrowableWeapon'
import {IWeapon, Katana} from './Weapon.ts'
import {TYPES} from './types'


export interface IDataService {
	get(url:string) : Promise<JSON>;
}

@injectable()
export class FetchDataService implements IDataService {
	async get(url:string) : Promise<JSON>{
		let response = await fetch(url);
		let data = await response.json();
		return data;
	}
}