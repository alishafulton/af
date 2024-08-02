import before from '../../assets/IMG_0549.png'

// this is my main picture on my extracurriculars page
// just imported it here to put the month/year over

export default function BigPic () {
    return (
        <div className="image-container relative mt-2 mx-2.5">
            <img src={before} alt="" className="w-full h-full" />
                <div class="text-overlay absolute left-0 top-0 p-2 font-sans text-white text-4xl">

                    March 2024
                
                </div>
        </div>
    );
};