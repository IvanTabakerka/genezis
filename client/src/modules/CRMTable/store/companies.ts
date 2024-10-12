import { defineStore } from 'pinia'
import axios from 'axios'

type List = {
    id: number
    name: string
}

type State = {
    list: List[]
}

export const companiesStore = defineStore('companies', {
    state: (): State => ({
        list: []
    }),
    actions: {
        async get () {
            const res = await axios.get('http://localhost:3000/companies')
            this.list = res.data
        },
        async create (name:string) {
            await axios.post('http://localhost:3000/companies', {
                name: name
            })
            await this.get()
        }
    },
})