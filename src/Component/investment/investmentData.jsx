import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import BarChartIcon from '@mui/icons-material/BarChart';
import Diversity2Icon from '@mui/icons-material/Diversity2';
export const datas = [
    {
        id: 1,
        namePrice: "Expected FOX Price",
        foxPrice: "0.36 $",
        startingPrice: "100 $",
        endPrice: "100, 000 $",
        expectedName: "The expected value of your investment",
        expectedPrice: "180,000 $",
        Roi: "RO1=360%",
        icon: <MonetizationOnIcon style={{fontSize: "2.5rem"}}/>
    },
    {
        id: 2,
        namePrice: "Expected FOX Price",
        foxPrice: "0.36 $",
        startingPrice: "100 $",
        endPrice: "100, 000 $",
        expectedName: "Expected monthly dividend",
        expectedPrice: "180,000 $",
        Roi: "3600 FOX = 1296 $",
        icon: <BarChartIcon style={{fontSize: "2.5rem"}}/>
    },
    {
        id: 3,
        namePrice: "Calculation time",
        foxPrice: "Q3 2025 $",
        startingPrice: "100 $",
        endPrice: "100, 000 $",
        expectedName: "Masternode bonus",
        expectedPrice: "180,000 $",
        Roi: "RO1=360%",
        icon: <Diversity2Icon style={{fontSize: "2.5rem"}}/>
    }
]