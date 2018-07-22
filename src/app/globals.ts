const SITE_URL = 'http://localhost:5000'
export const API = {
  Account: `${SITE_URL}/api/Account`,
  Payments: (id) => `${SITE_URL}/api/Payments?id=${id}`,
  Questions: `${SITE_URL}/api/Questions`,
  WalletsTransactions: `${SITE_URL}/api/Wallets/transactions`,
  Wallets: `${SITE_URL}/api/Wallets`,
  Answers:`${SITE_URL}/api/Questions/api/Questions/Answers`

}
