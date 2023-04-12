import type { ApiConfig } from '@/@types';
import axios from 'axios'

const token = import.meta.env.VITE_API_KEY as string;

export function getMonthFlights(config: ApiConfig) {
    const params = {
        ...config,
        token,
        limit: 25,
    }

    return axios.get('/api', {
        params
    });
}
