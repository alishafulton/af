import sprig1 from '../../assets/sprig1.png'
import sprig2 from '../../assets/sprig2.png'
import './Sprig.css';
import { SprigPrototype } from './SprigPrototype';

export default function Sprig () {
    return (

        <div className="portfolio-s">
        <img src={ sprig1 } alt="" className="pimg" />

        <div className="flex flex-row gap-8">
              <SprigPrototype link="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F4Sc1LEgwnnOIf8Z31dkYtD%2FSPRIG%3Fpage-id%3D34%253A2%26node-id%3D230-347%26viewport%3D369%252C25%252C0.26%26t%3DHD5UMDuOwPQIH59t-1%26scaling%3Dscale-down%26content-scaling%3Dfixed%26starting-point-node-id%3D230%253A345" />
            </div>

        <img src={ sprig2 } alt="" className="pimg"/>
        </div>

    );
};


