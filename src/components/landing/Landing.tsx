import "./Landing.scss";
import github from "../../assets/icons/github.svg";
import linkedin from "../../assets/icons/linkedin.svg";
import facebook from "../../assets/icons/facebook.svg";
import instagram from "../../assets/icons/instagram.svg";
import pinterest from "../../assets/icons/pinterest.svg";
import leetcode from "../../assets/icons/leetcode.svg";

export default function Landing() {
    return (
        <section id="Landing">
            <div className="portrait"></div>
            <div className="myself">
                <h1>
                    Hey I'm
                    <br/>
                    Shuktika Mahanty
                </h1>
                <p>
                    <b>
                        I’m a Web developer & I’m very passionate and dedicated to my work.
                        I have acquired the skills and knowledge necessary to make your project
                        a success.
                    </b>
                </p>
                <div className="socials">
                    <a href="https://github.com/Shuktika15" aria-label="GitHub">
                        <img src={github} alt="GitHub"/>
                    </a>
                    <a href="https://in.linkedin.com/in/shuktika-mahanty" aria-label="LinkedIn">
                        <img src={linkedin} alt="LinkedIn"/>
                    </a>
                    <a href="https://www.facebook.com/ShuktikaMahanty" aria-label="Facebook">
                        <img src={facebook} alt="Facebook"/>
                    </a>
                    <a href="https://www.instagram.com/shuktikamahanty" aria-label="Instagram">
                        <img src={instagram} alt="Instagram"/>
                    </a>
                    <a href="https://pinterest.com/shuktikam" aria-label="Pinterest">
                        <img src={pinterest} alt="Pinterest"/>
                    </a>
                    <a href="https://leetcode.com/shukti" aria-label="LeetCode">
                        <img src={leetcode} alt="LeetCode"/>
                    </a>
                </div>
            </div>
        </section>
    )
}