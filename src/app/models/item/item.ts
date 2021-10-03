export class Item {

    id: string;
    name: string;
    description: string;
    price: number;
    imageURL: string;

    constructor(id = '', name ='', description = '', price = 0, imageURL = '') {
        this.id = id
        this.name = name
        this.description = description
        this.price = price
        this.imageURL = imageURL;

    }

}
