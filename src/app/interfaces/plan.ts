export interface Plan{
    title: string,
    overview: string,
    price: number,
    expiration: string,
    prevIncluded?: string,
    services: string[],

}