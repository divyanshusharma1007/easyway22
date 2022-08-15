import Head from "next/head"
import Header from "../admin/Layout/Header"
import SideBar from "../admin/Layout/SideBar"



export default function MainLayout({ children }) {
    return (
        <div >
            <Header/>
            {/* <SideBar/> */}
            <main>{children}</main>
        </div>
    )
}
