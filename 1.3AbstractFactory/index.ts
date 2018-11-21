interface IHttp {
    get(url: string)
    post(option: JSON)
}

class XMLHttpRequst implements IHttp {
    constructor() {

    }

    get(url) {
        console.log('XMLHttpRequst get')
    }
    post(option) {
        console.log('XMLHttpRequst post')
    }
}

class Fetch implements IHttp {
    constructor() {

    }
    get(url) {
        console.log('Fetch get')
    }
    post(option) {
        console.log('Fetch post')
    }
}


class HttpFactory {
    constructor() {

    }

    static getHttpRequst(type): IHttp {
        if (type === 'xml') {
            return new XMLHttpRequst()
        } else if (type === 'fetch') {
            return new Fetch()
        }
    }
}


class Client {
    static main() {
        let xmlHttpRequst = HttpFactory.getHttpRequst('xml')
        xmlHttpRequst.get('http://1....')
    }
}