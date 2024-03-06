


export interface IOrder {
    userId?: number
    totalCost: number
    services: { service_id: number }[] | null;
}


export interface IOrderBlock {
    order_id: number
    service_ids: number[]
    service_prices: number[]
    service_titles: string[]
    total_order_cost: number
}