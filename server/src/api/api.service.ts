import { Injectable } from '@nestjs/common';
import axios from "axios";

@Injectable()
class ApiService {
    private readonly authUrl = 'https://app2.gnzs.ru'
    private baseDomain: string = ''
    private accessToken: string = ''
    amoCRMApi = null

    async fetchToken () {
        try {
            const res = await axios.get(`${this.authUrl}/amocrm/test/oauth/get-token.php`, {
                headers: {
                    'X-Client-Id': '31992158',
                }
            })
            if (res.status === 200) {
                this.baseDomain = res.data.base_domain
                this.accessToken = res.data.access_token
            } else {
                throw new Error('Токен не получен')
            }
        } catch (e) {
            throw e;
        }
    }

    async createAxiosInstance () {
        const amoCRMApi = axios.create();
        amoCRMApi.defaults.baseURL = `https://${this.baseDomain}`;
        amoCRMApi.defaults.headers.common['Authorization'] = `Bearer ${this.accessToken}`;
        this.amoCRMApi = amoCRMApi;
    }
}

const apiService = new ApiService();

(async () => {
    await apiService.fetchToken();
    await apiService.createAxiosInstance();
})();

export {
    apiService
};