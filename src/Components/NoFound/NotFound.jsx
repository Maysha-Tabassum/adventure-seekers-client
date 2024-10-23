import { Link } from 'react-router-dom';
// import bg from '../../../images/notFoundBg.png';

// const notFoundBg = {
//     background: `url(${bg})`,
//     backgroundColor: 'rgba(10, 121, 131, 0.404)',
//     backgroundPosition: 'center top',
//     backgroundBlendMode: 'darken, luminosity',
// }

const NotFound = () => {
    return (
        <div style={{ width: '100%', height: '100vh' }}>
            <div /*  style={notFoundBg} */ className="w-100 h-100 d-flex justify-content-center align-items-center">
                <div>
                    <h1 style={{ fontSize: '100px', color: 'tomato' }} className="fw-bolder ">404</h1>
                    <h1 style={{ fontSize: '50px' }} className="my-3">Page Not Found</h1>
                    <p style={{ fontSize: '1.1rem' }} className="fw-bold lh-2 mb-4">The page you are looking for might have been removed had its <br /> name changed or is temporarily unavailable</p>
                    <Link to="/"> <button className="bg-primary" style={{
                        border: 'none',
                        padding: '10px 40px',
                        fontSize: '20px',
                        color: '#fff',
                        fontWeight: 'bold',
                        letterSpacing: '.1rem'
                    }}>Back to Home</button> </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;