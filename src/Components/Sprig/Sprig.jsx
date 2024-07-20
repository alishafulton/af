import sprig1 from '../../assets/sprig1.png'
import sprig2 from '../../assets/sprig2.png'
import './Sprig.css';

export default function Sprig () {
    return (

        <div className="portfolio">
        <img src={ sprig1 } alt="" className="pimg" /><br/>
        <img src={ sprig2 } alt="" className="pimg"/>
        </div>

    );
};