import axios from 'axios'
import type { ApiConfig, ResponseType } from '@/@types';

// Get token from environment
const token = import.meta.env.VITE_API_KEY as string;

// Core function requesting data from API using specific params
// to find flights
export async function getMonthFlights(config: ApiConfig) {
    const params = {
        ...config,
        token,
        limit: 10,
    }

    return (await axios.get('/api', {
        params
    })).data.data as ResponseType[];
}
