class InputHandler {
    constructor() {
        this.keys = [];
        window.addEventListener("keydown", e => {
            if (!this.keys.includes(e.key) && e.key.includes("Arrow")){
                this.keys.push(e.key);
            }
        });
        window.addEventListener("keyup", e => {
            this.keys = this.keys.filter((el) => el !== e.key);
        });
    }
}

export default InputHandler;