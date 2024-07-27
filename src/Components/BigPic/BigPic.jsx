import before from '../../assets/IMG_0549.png'

export default function BigPic () {
    return (
        <div class="image-container relative">
            <img src={before} alt="" className="w-full m-6" />
                <div class="text-overlay absolute left-0 top-0 p-4 font-sans font-purple text-3xl">
                    March 2024
                </div>
        </div>
    );
};