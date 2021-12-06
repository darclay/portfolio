import './MeetDave.css';
import { Link, Route, Routes } from 'react-router-dom';
import fam1 from './photos/family.jpg';
import riot1 from './photos/riot1.jpg';
import becAndDogs from './photos/becAndDogs.jpg';
import recruiter from './photos/recruiter.png';
import schoolShooting from './photos/shooting.jpg';
import hiker from './photos/hiker.jpg';
import familyHiking from './photos/familyHiking.jpg';
import NavBar from '../../components/navigation/NavBar.jsx'

const MeetDave = () => {
  return (

    <div className="MeetDiv">

          <NavBar />
                          
          <div className="container1">
                <div className="daveBio">
                    <h2>Meet Dave</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu nibh eget ligula tempus efficitur ac gravida arcu. Donec dignissim malesuada mollis. Sed enim magna, faucibus tristique ultrices ut, commodo et lacus. Maecenas eros elit, tincidunt sed odio vitae, feugiat eleifend risus. Nam sed ante non sem varius bibendum. Morbi pharetra tincidunt elit sed pellentesque. Nulla egestas eget arcu vel interdum. Integer tempus, ex sed mollis dignissim, ipsum neque blandit ex, ac aliquam dolor est venenatis libero. Aliquam egestas efficitur felis, at aliquet neque maximus vitae. Pellentesque interdum turpis sed lorem interdum vehicula. Nunc id odio elementum, hendrerit ipsum sed, efficitur orci. Suspendisse sed nisl viverra, vulputate ex vitae, vestibulum ex. Donec tincidunt est ac risus interdum, eget lobortis felis ultricies.

                    Phasellus molestie cursus risus, vitae tincidunt mauris cursus eget. Maecenas feugiat ipsum risus, a rutrum nunc eleifend in. Curabitur id volutpat nunc. Pellentesque a dictum urna, non hendrerit enim. Aliquam porta ex et libero mattis, vel venenatis orci facilisis. Morbi non tortor sapien. Nullam molestie nisi enim, non luctus magna efficitur sit amet.

                    Phasellus nec fermentum odio. Quisque consequat quis libero at luctus. Sed dignissim sapien ut nisl vulputate scelerisque. Nunc egestas ultricies diam. Sed libero justo, rhoncus laoreet augue maximus, sodales hendrerit nulla. Duis urna purus, venenatis ut felis ultricies, vestibulum fermentum ligula. Cras facilisis egestas purus, ut pretium augue. Integer purus elit, laoreet in condimentum eu, egestas vel orci. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus sed convallis justo, in finibus sapien. Nullam imperdiet mollis sapien vitae placerat. Duis at neque sit amet lorem ornare varius. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas rhoncus velit vel varius rutrum. Pellentesque suscipit nisi nec felis pellentesque, sed blandit odio viverra. Duis sit amet fringilla justo, in sodales turpis.
                    </p>
                </div>

                <div className="pic1to3Div">
                    <img id="fam1" src={fam1} alt="family photo" />
                    <img id="riot1" src={riot1} alt="riot cops" />
                    <img id="becAndDogs" src={becAndDogs} alt="man and women with dogs" />
                </div>
          </div>
          
          <div className="container2">
                <div className="allOtherPics">
                    <img id="recruiter" src={recruiter} alt="recruiter and man talking" />
                    <img id="schoolShooting" src={schoolShooting} alt="police officers" />
                    <img id="hiker" src={hiker} alt="hiker" width="50%" />
                    <img id="familyHiking" src={familyHiking} alt="family hiking" width="50%" />
                </div>
                
                {/* <Footer /> */}
          </div>
    </div>
  );
}

export default MeetDave;