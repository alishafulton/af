import sprig1 from '../../assets/sprig1.png'
import sprig2 from '../../assets/sprig2.png'
import './Sprig.css';
import { SprigPrototype } from './SprigPrototype';

export default function Sprig () {
    return (

        <div className="portfolio">
        <img src={ sprig1 } alt="" className="pimg" />

        <div className="flex flex-row gap-8">
              <SprigPrototype/>
            </div>

        <img src={ sprig2 } alt="" className="pimg"/>
        </div>

    );
};


