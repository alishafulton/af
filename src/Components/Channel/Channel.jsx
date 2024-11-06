import channel1 from '../../assets/channel1.png';
import channel2 from '../../assets/channel2.png';
import channel3 from '../../assets/channel3.png';
import channel4 from '../../assets/channel4.png';
import channel5 from '../../assets/channel5.png';


// i imported all of my sections of my portfolio
// separately as components 
// all have prototypes in them
const scrollToTopButton = 
              document.getElementById('scroll-to-top');
      
        // Show button when user scrolls down
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 100) {
                scrollToTopButton.style.display = 'block';
            } else {
                scrollToTopButton.style.display = 'none';
            }
        });

        // Smooth scroll to top
        function scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }  

export default function Channel () {
    return (<>
    <button onclick="scrollToTop()" 
            class="scroll-to-top fixed z-30 bottom-4 right-4 
                       bg-gray-800 text-white rounded-full 
                       transition duration-300 hover:bg-gray-700 
                       hover:text-gray-200"><div className="w-2 text-pink">up</div></button>
   
        <div className="flex-col max-w-4xl justify-items-center ">
        <img src={ channel1 } alt="" className="p-0" />
        <img src={ channel2 } alt="" className="p-0" />
        <img src={ channel3 } alt="" className="p-0" />
        <img src={ channel4 } alt="" className="p-0" />
        <img src={ channel5 } alt="" className="p-0" />


        </div>
 </>
    );
};