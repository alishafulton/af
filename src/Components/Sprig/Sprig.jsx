import sprig1 from '../../assets/sprig1.png'
import sprig2 from '../../assets/sprig2.png'
import { SprigPrototype } from './SprigPrototype';

export default function Sprig () {
    return (
<div>
        <div className="flex-col">
        <img src={ sprig1 } alt="" className="width:100%" />

        
              <SprigPrototype/>
            

        <img src={ sprig2 } alt="" className="width:100%"/>
        </div>
</div>
    );
};


