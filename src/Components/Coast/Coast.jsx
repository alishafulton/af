import coast1 from '../../assets/Coast1.png';
import coast2 from '../../assets/Coast2.png';
import '../Sprig/Sprig.css';
import { CoastPrototype } from './CoastPrototype';


export default function Coast () {
    return (

        <div className="portfolio-c">
        <img src={ coast1 } alt="" className="pimg" />


         <div className="flex flex-row gap-8">
              <CoastPrototype />
        </div>

            <img src={ coast2 } alt="" className="pimg" />

        </div>

    );
};