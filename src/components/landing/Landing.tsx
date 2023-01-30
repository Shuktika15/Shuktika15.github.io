import github from "../../assets/icons/github.svg";
import linkedin from "../../assets/icons/linkedin.svg";
import facebook from "../../assets/icons/facebook.svg";
import instagram from "../../assets/icons/instagram.svg";
import pinterest from "../../assets/icons/pinterest.svg";
import leetcode from "../../assets/icons/leetcode.svg";
import "./Landing.scss";

export default function Landing() {
    return (
        <section id="Landing">
            <div className="portrait fade-in"></div>
            <div className="myself">
                <h1 className="slide-in" style={{animationDelay: '1s'}}>
                    Hey I'm
                    <br/>
                    Shuktika Mahanty
                </h1>
                <p className="expand" style={{animationDelay: '2s'}}>
                    I’m a Web developer & I’m very passionate and dedicated to my work.
                    I have acquired the skills and knowledge necessary to make your project
                    a success.
                </p>
                <div className="socials">
                    <a
                        href="https://github.com/Shuktika15"
                        aria-label="GitHub"
                        className="fade-in"
                        style={{animationDelay: '3s', animationDuration: '500ms'}}
                    >
                        <img src={github} alt="GitHub"/>
                    </a>
                    <a
                        href="https://in.linkedin.com/in/shuktika-mahanty"
                        aria-label="LinkedIn"
                        className="fade-in"
                        style={{animationDelay: '3.5s', animationDuration: '500ms'}}
                    >
                        <img src={linkedin} alt="LinkedIn"/>
                    </a>
                    <a
                        href="https://www.facebook.com/ShuktikaMahanty"
                        aria-label="Facebook"
                        className="fade-in"
                        style={{animationDelay: '4s', animationDuration: '500ms'}}
                    >
                        <img src={facebook} alt="Facebook"/>
                    </a>
                    <a
                        href="https://www.instagram.com/shuktikamahanty"
                        aria-label="Instagram"
                        className="fade-in"
                        style={{animationDelay: '4.5s', animationDuration: '500ms'}}
                    >
                        <img src={instagram} alt="Instagram"/>
                    </a>
                    <a
                        href="https://pinterest.com/shuktikam"
                        aria-label="Pinterest"
                        className="fade-in"
                        style={{animationDelay: '5s', animationDuration: '500ms'}}
                    >
                        <img src={pinterest} alt="Pinterest"/>
                    </a>
                    <a
                        href="https://leetcode.com/shukti"
                        aria-label="LeetCode"
                        className="fade-in"
                        style={{animationDelay: '5.5s', animationDuration: '500ms'}}
                    >
                        <img src={leetcode} alt="LeetCode"/>
                    </a>
                </div>
            </div>
        </section>
    )
}