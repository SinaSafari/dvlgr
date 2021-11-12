import {Typography} from "antd";
import {SvgHeader} from "@/components/hero-header/svg";

export const HeroHeader = () => {
    const {Title} = Typography;
    return (
        <div className="hero-header">
            <div className="banner"/>
            <div>
                <h3 className="fw-bold text-white mb-3">
                    <span>
                        &lt;DevLogger&gt;
                    </span>
                    پلتفرمی برای
                </h3>
                <h3 className="fw-bold text-white mb-3">
                    انتقال تجربه و دانش به زبان فارسی
                </h3>
                <p className="fw-normal text-white">در مسیر حرفه ای شدن با ما همراه باشید . . .</p>
            </div>
            <div className="hero-header-img">
                <SvgHeader/>
            </div>
        </div>
    )
}