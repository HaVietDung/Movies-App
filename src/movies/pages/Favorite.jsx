import LayoutMovies from "../components/Layout";
const FavoriteMovies = () => {
    return(
        <LayoutMovies
            level1="Phim yeu thich"
            level2="Danh sach"
            level3="Phim"
        >
            <h2>danh sach yeu thich</h2>
        </LayoutMovies>
    )
}
export default React.memo(FavoriteMovies)