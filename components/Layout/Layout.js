import { useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }) {
    // const [dimensions, setDimensions] = useState(
    //     { height: window.innerHeight }

    // )
    // useEffect(() => {
    //     function handleResize() {
    //         setDimensions({
    //             height: window.innerHeight,

    //         })

    //     }

    //     window.addEventListener('resize', handleResize)

    //     return () => {
    //         window.removeEventListener('resize', handleResize)

    //     }
    // }, [window.innerHeight])
    return (
        <div>
            {/* <Header /> */}
            <main>{children}</main>
            {/* <Footer /> */}
        </div>
    )
}