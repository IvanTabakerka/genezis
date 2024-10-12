import { Injectable } from '@nestjs/common';
import { apiService } from '../api/api.service';

@Injectable()
export class LeadsService {
    async fetchAll () {
        try {
            const res = await apiService.amoCRMApi.get('/api/v4/leads', {
                params: {
                    limit: 10,
                    'order[id]': 'desc'
                }
            })
            if (res.status !== 200) {
                throw new Error('Something went wrong!');
            } else {
                return res.data._embedded.leads.map(value => {
                    return {
                        id: value.id,
                        name: value.name
                    }
                });
            }
        } catch (e) {
            throw e;
        }
    }

    async create (name: string) {
        try {
            const res = await apiService.amoCRMApi.post('/api/v4/leads',[
                {name: name}
            ])
            if (res.status !== 200) {
                throw new Error('Something went wrong!');
            } else {
                return res.data;
            }
        } catch (e) {
            throw e;
        }
    }
}
