import before from '../../assets/IMG_0549.png'

export default function BigPic () {
    return (
        <div className="image-container relative">
            <img src={before} alt="" className="w-full" />
                <div class="text-overlay absolute right-0 bottom-0 p-2 font-sans text-purple text-3xl">
                    March 2024
                </div>
        </div>
    );
};