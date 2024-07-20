import channel1 from '../../assets/1.png';
import channel2 from '../../assets/sprig2.png';
import '../Sprig/Sprig.css';
import { ChannelPrototypeiOS } from './ChannelPrototypeiOS';


export default function Channel () {
    return (

        <div className="portfolio-c">
        <img src={ channel1 } alt="" className="pimg" />


         <div className="flex flex-row gap-8">
              <ChannelPrototypeiOS />
            </div>

            <img src={ channel2 } alt="" className="pimg" />
        </div>

    );
};