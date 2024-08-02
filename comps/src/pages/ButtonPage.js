import Button from '../components/Button';
import { GoBell, GoBookmarkFill, GoDatabase } from 'react-icons/go'

function ButtonPage (){

    const handleClick = () =>{
        console.log("Click!")

    }
    return(
        <div>
            <div>
                <Button success  rounded outline className='mb-5' onClick={handleClick}><GoBell />Click Me!!</Button>
            </div>
            <div>
                <Button danger outline><GoBookmarkFill />Add to Cart</Button>
            </div>
            <div>
                <Button warning onMouseLeave={handleClick}>Buy Now</Button>
            </div>
            <div>
                <Button primary rounded><GoDatabase />See Deals</Button>
            </div>
            <div>
                <Button secondary outline>Hide Adds</Button>
            </div>
        </div>
    );    
   
}

export default ButtonPage;