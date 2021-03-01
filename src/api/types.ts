export type RatesApiCallType = {
  base: string;
  rate: number;
  symbol: string;
}[];

export type RatesApiCallTypeRaw = {
  base: string;
  rates: {
    [key: string]: number;
  };
};

export type SymbolsApiCallType = {
  symbols: Record<string, string>;
};

export type BaseRate = {
    key: string;
    value: number;
}