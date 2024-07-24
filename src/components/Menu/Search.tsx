import './Search.css'

type Props = {}
const Search = (props: Props) => {
    return (
        <div className="search">
            <input
                className="search_field"
                type="search"
                placeholder="Search for products"
            />
        </div>
    )
}
export default Search
