export default class PostDate {
    constructor(img){
        this.date = new Date()
        this.img = img
    }
    toString() {
        return JSON.stringify({
            date: this.date.toJSON(),
            img: this.img
        })
    }
    
}
