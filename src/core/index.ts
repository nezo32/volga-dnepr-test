import axios, { type AxiosRequestConfig } from 'axios'



const token = import.meta.env.VITE_API_KEY as string;

export function getMonthFlights(origin = 'VNO', destination = 'NYC', one_way = true, month?: string, trip_class?: TripClass, currency = 'rub', page = 1) {
    const params = {
        origin,
        destination,
        one_way,
        month,
        trip_class,
        currency,
        page,
        token,
        limit: 25
    }

    return axios.get('/api', {
        params
    });
}
