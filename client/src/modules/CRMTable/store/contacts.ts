import {defineStore} from "pinia";
import axios from "axios";


type List = {
    id: number
    name: string
}

type State = {
    list: List[]
}

export const contactsStore = defineStore('contacts', {
    state: (): State => ({
        list: []
    }),
    actions: {
        async get () {
            const res = await axios.get('http://localhost:3000/contacts')
            this.list = res.data
        },
        async create (name:string) {
            await axios.post('http://localhost:3000/contacts', {
                name: name
            })
            await this.get()
        }
    },
})