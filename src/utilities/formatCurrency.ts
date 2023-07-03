const CUTTENCY_FORMATTER = new Intl.NumberFormat(undefined, {
  currency: "USD",
  style: "currency",
});
export function formatCurrency(number: number) {
  return CUTTENCY_FORMATTER.format(number);
}
