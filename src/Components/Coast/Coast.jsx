import coast1 from '../../assets/Coast1.png';
import coast2 from '../../assets/Coast2.png';
import CoastPrototype from './CoastPrototype';

// i imported all of my sections of my portfolio
// separately as components 
// all have prototypes in them


export default function Coast () {
    return (
        <div className="flex-col">
        <img src={ coast1 } alt="" className="p-2" />

              <CoastPrototype />

            <img src={ coast2 } alt="" className="p-2" />

        </div>

    );
};