// app/not-found.tsx
import './not-found.scss';

const NotFound = () => {
  return (
    <section className="wrapper-section">
      <div className="error-page-wrapper">
        <div className="error-content">
          {/* Large 404 Background */}
          <div className="error-number">404</div>
          
          {/* Content Overlay */}
          <div className="error-overlay">
            <h1 className="error-title">Page Not Found</h1>
            
            <button 

              className="home-button"
            >
              Go to Home
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="arrow-icon" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path 
                  fillRule="evenodd" 
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" 
                  clipRule="evenodd" 
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;