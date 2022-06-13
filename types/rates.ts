interface RateContent {
  cur: string;
  value1: string;
  delta1: string;
  value2: string;
  delta2: string;
}

interface Rate {
  $: RateContent;
}

interface RateArray {
  rate: Rate[];
}

export interface RatesTypes {
  $: Record<string, string>,
  Rates: RateArray[],
  PRates: RateArray[],
  CBARates: RateArray[],
}

export interface RatesData {
  cash_result: RatesTypes,
  non_cash_result: RatesTypes,
  update_dt: string,
}
