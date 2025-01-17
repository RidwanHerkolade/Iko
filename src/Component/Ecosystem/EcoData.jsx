import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import TokenIcon from '@mui/icons-material/Token';
import CurrencyExchangeSharpIcon from '@mui/icons-material/CurrencyExchangeSharp';
export const ecoDatas = [
    {
        id: 1,
        icon: <CurrencyBitcoinIcon  style={{fontSize: "2rem"}}/>,
        btn: "Enclose BTC"
    },
    {
        id: 2,
        icon: <CurrencyExchangeSharpIcon/>,
        btn: "Enclose ETH"
    },
    {
        id: 3,
        icon: <AccountBalanceIcon style={{fontSize: "2rem"}}/>,
        btn: "Bank Transfer"
    },
    {
        id: 4,
        icon: <TokenIcon  style={{fontSize: "2rem"}}/>,
        btn: "Enclose UXC"
    }
]