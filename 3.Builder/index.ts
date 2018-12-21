import { stat } from "fs";

//Product
class Dialog {
    constructor() {

    }

    setIcon(icon) {
        //todo...
    }
}

class DialogBuilder {

    private icon = ''
    private title = ''
    private msg = ''
    private confirm = null
    private cancel = null

    constructor() {
    }

    setIcon(icon) {
        this.icon = icon
        return this
    }

    setTitle(title) {
        this.title = title
        return this
    }

    setMessage(msg) {
        this.msg = msg
        return this
    }


    setConfirmButton(txt, callback) {
        this.confirm = {
            txt,
            callback
        }
        return this
    }


    setCancelButton(txt, callback) {
        this.cancel = {
            txt,
            callback
        }
        return this
    }

    build() {
        //将dialog的创建逻辑隐藏，跟进外部设置的全部内容来创建具体的对象
        let dialog = new Dialog()
        if (this.icon) {
            dialog.setIcon(this.icon)
        }
        //...
        return dialog
    }

}

class main {
    static main() {
        let dialog = new DialogBuilder().setMessage('11').build()
    }
}