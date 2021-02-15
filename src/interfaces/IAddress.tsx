export default interface IAddress {
    "street": string,
    "suite": string,
    "city": string,
    "zipcode": string,
    "geo": IGeo
}

interface IGeo {
    lat: number,
    lng: number
}