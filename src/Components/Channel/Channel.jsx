import channel1 from '../../assets/1.png';
import channel2 from '../../assets/2.png';
import channel3 from '../../assets/3.png';
import ChannelPrototypeAnd from './ChannelPrototypeAnd';
import ChannelPrototypeiOS  from './ChannelPrototypeiOS';

// i imported all of my sections of my portfolio
// separately as components 
// all have prototypes in them


export default function Channel () {
    return (

        <div className="flex-col">
          <img src={ channel1 } alt="" className="p-2" />

              <ChannelPrototypeiOS />

            <img src={ channel2 } alt="" className="p-2" />

              <ChannelPrototypeAnd />

            <img src={ channel3 } alt="" className="p-2" />
        </div>

    );
};