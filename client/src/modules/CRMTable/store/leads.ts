import {defineStore} from "pinia";
import axios from "axios";

type List = {
    id: number
    name: string
}

type State = {
    list: List[]
}

export const leadsStore = defineStore('leads', {
    state: (): State => ({
        list: []
    }),
    actions: {
        async get () {
            const res = await axios.get('http://localhost:3000/leads')
            this.list = res.data
        },
        async create (name:string) {
            await axios.post('http://localhost:3000/leads', {
                name: name
            })
            await this.get()
        }
    },
})