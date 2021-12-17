class StorageItem{

    /** @type {string} */
    #storageName = "";

    constructor(name){
        this.#storageName = name;
        // Look if the localstorage item even exists 🤨
        if(!localStorage.getItem(name)) localStorage.setItem(this.#storageName, JSON.stringify({}));
    }

    save(){
        let data = {};

        let instance = this;
        let variables;

        for(variables in instance) {
            data[variables] = this[variables];
        }
        
        localStorage.setItem(this.#storageName, JSON.stringify(data));
    }

    remove(){
        localStorage.removeItem(this.#storageName);
    }

}

class Storage{

    /**
     * @param {string} name 
     * @returns {StorageItem}
     */
    static get(name){
        return new StorageItem(name);
    }

}

export default Storage;