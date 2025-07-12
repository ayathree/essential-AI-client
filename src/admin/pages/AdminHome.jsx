import AdminNav from "../components/AdminNav";
import Sidebar from "../components/Sidebar";


const AdminHome = () => {
    return (
        <div className="w-[100vw] h-[100vh] relative">
            <AdminNav></AdminNav>
            <Sidebar></Sidebar>
            
        </div>
    );
};

export default AdminHome;