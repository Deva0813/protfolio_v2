export const imgPath = (path: string) => {
    const isPord = process.env.NODE_ENV == "production"
    const repositoryName = "portfolio_v2";
    return isPord ? `/${repositoryName}${path}` : path
}

export function formatCount(value: number, locale = "en-IN"): string {
  if (value < 10000) {
    return value.toLocaleString(locale);
  }
 
  const format = (num: number, suffix: string) => {
    const rounded = Math.round(num * 10) / 10;
    const str = rounded.toLocaleString(locale, {
      minimumFractionDigits: 0,
      maximumFractionDigits: 1,
    });
    return `${str}${suffix}`;
  };
 
  if (value < 100_000) {
    return format(value / 1000, "K");
  }
 
  if (value < 10_000_000) {
    return format(value / 100_000, "L");
  }
 
  return format(value / 1_000_000, "M");
}