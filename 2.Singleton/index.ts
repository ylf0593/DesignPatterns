var Singleton = {
    count: 1,
    add: function () {
        this.count++
    }
}



var SingletonV2 = (function () {
    var count = 1
    return {
        add: function () {
            count++
        }
    }
})()



var SingletonV3 = (function () {

    class Demo {
        private count = 0
        constructor() {
        }

        add() {
            this.count++
        }
    }
    let instance = null
    return {
        getInstance() {
            if (!instance) {
                instance = new Demo()
            }
            return instance
        }
    }
})()

