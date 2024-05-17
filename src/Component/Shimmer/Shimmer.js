import './shimmer.css';
import empltyGallery from '../../assets/emptyGallery.png';

const Shimmer = ({ errorMessage }) => {

    return (
        <div className="ShimmerContainer">
            <div className='showMessage'>
                <div id='imageCont'><img src={empltyGallery} alt='Blank' /></div>
                <p id='message'>No Data Found</p>
                {
                    errorMessage === 0? <p>Please search any User</p> : <p>Opps! The user with username does't exit</p>
                }
            </div>
        </div>
    );
}

export default Shimmer;