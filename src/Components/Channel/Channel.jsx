import channel1 from '../../assets/1.png';
import channel2 from '../../assets/2.png';
import channel3 from '../../assets/3.png';
import '../Sprig/Sprig.css';
import { ChannelPrototypeAnd } from './ChannelPrototypeAnd';
import { ChannelPrototypeiOS } from './ChannelPrototypeiOS';


export default function Channel () {
    return (

        <div className="portfolio">
        <img src={ channel1 } alt="" className="pimg" />


         <div className="flex flex-row gap-8">
              <ChannelPrototypeiOS />
            </div>

            <img src={ channel2 } alt="" className="pimg" />

            <div className="flex flex-row gap-8">
              <ChannelPrototypeAnd />
            </div>

            <img src={ channel3 } alt="" className="pimg" />
        </div>

    );
};