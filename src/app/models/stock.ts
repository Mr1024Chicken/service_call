export class Stock {
    constructor(
        public currentVolume: number,
        public lastPrice: number,
        public priceChange: number,
        public market: String,
        public symbol: String
    ){}
}
