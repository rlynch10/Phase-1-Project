class SnackList {
    constructor() {
        this.snacks = [];
    }

    createNewSnack(description) {
        const newSnack = new Snack(description);
        this.snacks.push(newSnack);
    }

    renderSnacks() {
        return this.snacks.map((snack) => snack.render()).join("");
    }

    deleteSnacks(description) {
        this.snacks = this.snacks.filter((snack) => snack.description !==description);
    }
}