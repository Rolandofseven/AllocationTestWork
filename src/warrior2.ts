import "reflect-metadata";
import { interfaces, injectable, inject, Container } from "inversify";
import {IThrowableWeapon, Shuriken} from './ThrowableWeapon'
import {IWeapon, Katana} from './Weapon.ts'
import {TYPES} from './types'

export interface IWarrior2 {
  fight(): string;
  sneak(): string;
}

@injectable()
export default class Jim implements IWarrior2 {

  private _weapon: IWeapon;
  private _throwableWeapon: IThrowableWeapon;

  public constructor(
    @inject(TYPES.Weapon) weapon: IWeapon,
    @inject(TYPES.ThrowableWeapon) throwableWeapon: IThrowableWeapon
  ) {
    this._weapon = weapon;
    this._throwableWeapon = throwableWeapon;
  }

  public fight() { return this._weapon.hit(); };
  public sneak() { return this._throwableWeapon.throw(); };
  

}
