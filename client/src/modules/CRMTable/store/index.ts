import { defineStore } from 'pinia'

export const moduleStore = defineStore('moduleCRMTable', {
    state: () => ({
        tableSelected: 'none',
        tableList: [
            {value: 'none', label: 'Не выбрано'},
            {value: 'leads', label: 'Сделки'},
            {value: 'contacts', label: 'Контакты'},
            {value: 'companies', label: 'Компании'},
        ]
    })
})