import React from 'react';
import lala1 from '../../assets/2.mp4';
import lala2 from '../../assets/3.mp4';
import lala3 from '../../assets/4.mp4';


// i imported all of my sections of my portfolio
// separately as components 
// all have prototypes in them


export default function LaLaLand () {
    return (
        <div className="justify-center">
            <div className="flex flex-col max-w-4xl justify-center justify-items-center ">

                <div className="flex bg-pink z-40 border-black">
                    <video className="object-cover "
                        muted autoPlay loop playsInline disablePictureInPicture >
                            <source src={ lala1 }  type="video/webm">
                            </source>
                    </video>
                </div>


                <div className="flex bg-pink z-40">
                    <video className="object-cover "
                        muted autoPlay loop playsInline disablePictureInPicture >
                            <source src={ lala2 }  type="video/webm">
                            </source>
                    </video>
                </div>


                <div className="flex bg-pink z-40">
                    <video className="object-cover "
                        muted autoPlay loop playsInline disablePictureInPicture >
                            <source src={ lala3 }  type="video/webm">
                            </source>
                    </video>
                </div>

</div>

</div>

    );
};