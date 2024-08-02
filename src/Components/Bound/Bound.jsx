import bound1 from '../../assets/bound1.png';
import bound2 from '../../assets/bound2.png';
import BoundPrototype from './BoundPrototype';


// i imported all of my sections of my portfolio
// separately as components 
// all have prototypes in them

export default function Bound () {
    return (

        <div className="flex-col">
            <img src={ bound1 } alt="" className="p-2" />

            <BoundPrototype />

            <img src={ bound2 } alt="" className="p-2" />

        </div>

    );
};