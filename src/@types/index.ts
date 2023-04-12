export enum TripClass {
    "Economy",
    "Business",
    "First"
}

export type Currencies = 'rub' | 'eur' | 'usd'

export interface ApiConfig {
    origin: string,
    destination: string,
    one_way?: boolean,
    month?: string,
    trip_class?: TripClass,
    currency?: Currencies,
    page?: number
}