import "./Footer.scss";

export default function Footer() {
    return (
        <div id="Footer">
            <div className="container">
                <footer>
                    <p>Copyright &#169; {new Date().getFullYear()} Shuktika Mahanty</p>
                </footer>
            </div>
        </div>
    );
}