import { interfaces, injectable, inject, Container } from "inversify";

export interface IWeapon {
  hit(): string;
}


@injectable()
export class Katana implements IWeapon {
  public hit() {
    return "cut!";
  }
}

@injectable()
export class LongSword implements IWeapon {
  public hit() {
    return "Twack Twack!";
  }
}