import { interfaces, injectable, inject, Container } from "inversify";

export interface IThrowableWeapon {
  throw(): string;
}


@injectable()
export class Shuriken implements IThrowableWeapon {
  public throw() {
    return "hit!";
  }
}
