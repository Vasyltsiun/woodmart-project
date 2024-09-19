import { Button, TextField } from '@mui/material'
import './Quantity.css'

type Props = {
    onDecrementClick: () => void
    onIncrementClick: () => void
    count: number
    minCount: number
}
const Quantity = ({
    onDecrementClick,
    onIncrementClick,
    count,
    minCount,
}: Props) => {
    return (
        <div className="product_quantity">
            <Button
                className="quantity_button"
                variant="outlined"
                onClick={onDecrementClick}
                disabled={count <= minCount}
            >
                -
            </Button>
            <TextField
                className="quantity_field"
                size="small"
                value={count}
            ></TextField>
            <Button
                className="quantity_button"
                variant="outlined"
                onClick={onIncrementClick}
            >
                +
            </Button>
        </div>
    )
}
export default Quantity
