import "reflect-metadata";
import {Container} from "inversify";
import {IWarrior,Ninja} from './warrior.ts'
import {IWeapon, Katana} from './Weapon.ts'
import {IThrowableWeapon, Shuriken} from './ThrowableWeapon'
import {IDataService, FetchDataService} from './DataService'
import {IUsersRepository, UsersRepository} from './UsersRepository'

import {TYPES} from './types'
export class IocContainer {

    private constructor() {

    }
	
	public static getContainer(){
		const myContainer = new Container();
		myContainer.bind<IWarrior>(TYPES.Warrior).to(Ninja);
		myContainer.bind<IWeapon>(TYPES.Weapon).to(Katana);
		myContainer.bind<IThrowableWeapon>(TYPES.ThrowableWeapon).to(Shuriken);
		myContainer.bind<IDataService>(TYPES.DataService).to(FetchDataService);
		myContainer.bind<IUsersRepository>(TYPES.UsersRepository).to(UsersRepository);
		
		return myContainer;
		
	}
}