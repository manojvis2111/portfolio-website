import Link from "react-scroll/modules/components/Link";
import About from "../pages/About";
import styles from "../styles/navbar.module.css"
const Navbar = () => {
    return <nav className={styles.navbar}>
        <Link href ="/" passHref>
            <a className={styles.logolink}> VISHNU MANOJ</a>
        </Link>
        <Link to={"index"} smooth={true} duration={1500} offset={50}>Home</Link>
        <Link to={"About"} smooth={true} duration={100} offset={-50}>About</Link>
        <Link href="/Projects">Projects</Link>
    </nav>;
};

export default Navbar;