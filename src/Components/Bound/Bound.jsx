import bound1 from '../../assets/bound1.png';
import bound2 from '../../assets/bound2.png';
import { BoundPrototype } from './BoundPrototype';


export default function Bound () {
    return (

        <div className="portfolio">
        <img src={ bound1 } alt="" className="pimg" />


         <div className="flex flex-row gap-8">
              <BoundPrototype />
        </div>

            <img src={ bound2 } alt="" className="pimg" />

        </div>

    );
};