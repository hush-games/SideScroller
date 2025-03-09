class InputHandler {
    constructor() {
        this.keys = [];
        window.addEventListener("keydown", e => {
            if (!this.keys.includes(e.code) && (
                    e.code.includes("Arrow") ||
                    e.code.includes("Space"))) {
                this.keys.push(e.code);
            }
        });
        window.addEventListener("keyup", e => {
            this.keys = this.keys.filter((el) => el !== e.code);
        });
    }
}

export default InputHandler;