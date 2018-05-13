import "reflect-metadata";
import { interfaces, injectable, inject, Container } from "inversify";
import {IDataService} from './DataService';
import {TYPES} from './types'

export interface IUsersRepository{
	getAll() : Promise<JSON>;
}

@injectable()
export class UsersRepository implements IUsersRepository  {

  private _dataService: IDataService;
 

  public constructor(
    @inject(TYPES.DataService) dataService: IDataService,
  ) {
    this._dataService = dataService;
  }

  async getAll() : Promise<JSON>{
	  return this._dataService.get('https://jsonplaceholder.typicode.com/posts');
	
	}

}