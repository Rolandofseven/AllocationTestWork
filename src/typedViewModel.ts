import * as ko from "knockout";

export default class typedViewModel {
    public personName: KnockoutObservable<string>;
    constructor(personName: string) {
        this.personName = ko.observable(personName);
    }
}
