export function shortenWallet(wallet: string) {
  const start = wallet.substring(0, 3);
  const end = wallet.substring(wallet.length - 4);
  return `${start}...${end}`;
}
