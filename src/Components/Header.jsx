import PursuitLogo from "./PursuitLogo";
import "../styles/Header.css"

export default function Header() {
    return (
        <header>
        <PursuitLogo/>
        <h1 className="header-logo">URSUIT</h1>
        </header>
    );
}