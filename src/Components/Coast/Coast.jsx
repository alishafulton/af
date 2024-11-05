import coast1 from '../../assets/Coast1.png';
import coast2 from '../../assets/Coast2.png';
import coast3 from '../../assets/Coast3.png';
import coast4 from '../../assets/Coast4.png';
import coast5 from '../../assets/Coast5.png';
import coast6 from '../../assets/Coast6.png';
import coast7 from '../../assets/Coast7.png';

import CoastPrototype from './CoastPrototype';

// i imported all of my sections of my portfolio
// separately as components 
// all have prototypes in them


export default function Coast () {
    return (
        <div className="flex-col">
        <img src={ coast1 } alt="" className="p-0" />
        <img src={ coast2 } alt="" className="p-0" />
        <img src={ coast3 } alt="" className="p-0" />
        <img src={ coast4 } alt="" className="p-0" />
        <img src={ coast5 } alt="" className="p-0" />
        <img src={ coast6 } alt="" className="p-0" />

              <CoastPrototype />

            <img src={ coast7 } alt="" className="p-0" />

        </div>

    );
};