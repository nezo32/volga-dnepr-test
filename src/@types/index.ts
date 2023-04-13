export enum TripClass {
    "Economy",
    "Business",
    "First"
}

export type Currencies = 'rub' | 'eur' | 'usd'

// Simplifing choose from client for location
export interface DrawerDropdown {
    location: string,
    abbr: string,
}

// Requsest params config
export interface ApiConfig {
    origin: string,
    destination: string,
    one_way?: boolean,
    trip_class?: TripClass,
    currency?: Currencies,
    page?: number,
}


// Type of response from API
export interface ResponseType {
    actual: boolean,
    depart_date: string,
    destination: string,
    distance: number,
    duration: number,
    found_at: string,
    gate: string,
    number_of_changes: number,
    origin: string,
    return_date: string,
    show_to_affiliates: boolean,
    trip_class: number,
    value: number,
}