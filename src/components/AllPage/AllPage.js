import NavBar from "../NavBar/NavBar"
import Main from "../Main/Main"
import ItemCount from "../ItemCount/ItemCount"
const AllPage = () => {
    return <div>
        <NavBar />
        <Main >
            <ItemCount/>
        </Main>
    </div>
}
export default AllPage;