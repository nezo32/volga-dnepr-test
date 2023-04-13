import type { Currencies, DrawerDropdown } from "@/@types"

function splitting(arr: string[]) {
    const res: DrawerDropdown[] = [];
    for (const el of arr) {
        const splitted = el.split('.');
        res.push({ location: `${splitted[0]} - ${splitted[1]}`, abbr: splitted[2] })
    }
    return res;
}

export function mergeToDropdown(...locations: string[][]) {
    const returning = [];
    for (const items of locations) {
        returning.push(...splitting(items));
    }
    return returning;
}

export function switchCurrency(currencyId: number) {
    switch (currencyId) {
        case 0:
            return 'rub'
        case 1:
            return 'usd'
        case 2:
            return 'eur'
    }
}
export function switchCurrencyToSymbol(currency: Currencies) {
    switch (currency) {
        case 'rub':
            return '₽'
        case 'usd':
            return '$'
        case 'eur':
            return '€'
    }
}

export function dateTransform(date: string) {
    const tmp = new Date(date);
    tmp.setMonth(tmp.getMonth() - 1);
    return tmp.toLocaleDateString('ru-RU', { year: 'numeric', month: '2-digit', day: '2-digit' });
}
export function ticketDateTransform(date: string) {
    return new Date(date).toLocaleDateString('ru-RU', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: "2-digit"
    });
}