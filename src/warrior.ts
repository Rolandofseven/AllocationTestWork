import "reflect-metadata";
import { interfaces, injectable, inject, Container } from "inversify";
import {IThrowableWeapon, Shuriken} from './ThrowableWeapon'
import {IWeapon, Katana} from './Weapon.ts'
import {TYPES} from './types'

export interface IWarrior {
  fight(): string;
  sneak(): string;
}

@injectable()
export class Ninja implements IWarrior {

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
