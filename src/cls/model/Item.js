export default class Item {
    constructor(title) {
        this.id = Math.round(Math.random() * 100000).toString();
        this.title = title;
        this.done = false;
    }

    changeTitle(title) {
        this.title = title;
    }
}