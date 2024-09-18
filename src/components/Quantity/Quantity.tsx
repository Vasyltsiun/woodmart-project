import { Button, TextField } from '@mui/material'

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
                variant="outlined"
                onClick={onDecrementClick}
                disabled={count <= minCount}
            >
                -
            </Button>
            <TextField size="small" value={1}></TextField>
            <Button variant="outlined" onClick={onIncrementClick}>
                +
            </Button>
        </div>
    )
}
export default Quantity
