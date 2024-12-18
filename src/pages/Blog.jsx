import React, { useState, useEffect } from 'react';
import "../sass/blog.scss";
import { Container } from 'react-bootstrap';

const Blog = () => {
  // State to manage the visibility of the filter button (filterBtn)
  const [isVisible, setIsVisible] = useState(true);

  // State to track the window's width for responsive behavior
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Function to scroll the page to the bottom smoothly
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });

    // After the page scrolls down, hide the filter button after a short delay
    setTimeout(() => {
      setIsVisible(false);
    }, 100);
  };

  // Update the windowWidth state whenever the window is resized
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);  // Update window width on resize
    };

    window.addEventListener('resize', handleResize);  // Listen to window resize events
    return () => {
      window.removeEventListener('resize', handleResize);  // Clean up event listener
    };
  }, []);

  // Handle the scroll event to show or hide the filter button based on page position
  useEffect(() => {
    const handleScroll = () => {
      // Hide the filter button when the page is scrolled near the bottom
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 200) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);  // Listen to scroll events
    return () => {
      window.removeEventListener('scroll', handleScroll);  // Clean up event listener
    };
  }, []);

  return (
    <div className="blogContainer">
      <Container className="row">
        <div className="blogLeft col-lg-8 col-md-12 col-sm-12">
          {/* Render the button only when window width is <= 1400px and the button is visible */}
          {windowWidth <= 1400 && isVisible && (
            <div onClick={scrollToBottom} className="sidenav filterBtn" style={{ cursor: 'pointer' }}>
              <span>Filter Blogs</span>
            </div>
          )}
          {/* Blog Card Start */}
          <div className="blogCard">
            <div className="blogCardImage">
              <img
                src="https://themewagon.github.io/aranoz/img/blog/single_blog_1.png"
                alt="Blog Image"
              />
            </div>
            <div className="blogCardText">
              <h2>Google inks pact for new 35-storey office</h2>
              <p>
                That dominion stars lights dominion divide years for fourth have
                don't stars is that he earth it first without heaven in place
                seed it second morning saying.
              </p>
              <span>Tag:Travel,LifeStyle</span>
            </div>
          </div>
          <div className="blogCard">
            <div className="blogCardImage">
              <img
                src="https://themewagon.github.io/aranoz/img/blog/single_blog_1.png"
                alt="Blog Image"
              />
            </div>
            <div className="blogCardText">
              <h2>Google inks pact for new 35-storey office</h2>
              <p>
                That dominion stars lights dominion divide years for fourth have
                don't stars is that he earth it first without heaven in place
                seed it second morning saying.
              </p>
              <span>Tag:Travel,LifeStyle</span>
            </div>
          </div>
          <div className="blogCard">
            <div className="blogCardImage">
              <img
                src="https://themewagon.github.io/aranoz/img/blog/single_blog_1.png"
                alt="Blog Image"
              />
            </div>
            <div className="blogCardText">
              <h2>Google inks pact for new 35-storey office</h2>
              <p>
                That dominion stars lights dominion divide years for fourth have
                don't stars is that he earth it first without heaven in place
                seed it second morning saying.
              </p>
              <span>Tag:Travel,LifeStyle</span>
            </div>
          </div>
          <div className="blogCard">
            <div className="blogCardImage">
              <img
                src="https://themewagon.github.io/aranoz/img/blog/single_blog_1.png"
                alt="Blog Image"
              />
            </div>
            <div className="blogCardText">
              <h2>Google inks pact for new 35-storey office</h2>
              <p>
                That dominion stars lights dominion divide years for fourth have
                don't stars is that he earth it first without heaven in place
                seed it second morning saying.
              </p>
              <span>Tag:Travel,LifeStyle</span>
            </div>
          </div>
          <div className="blogCard">
            <div className="blogCardImage">
              <img
                src="https://themewagon.github.io/aranoz/img/blog/single_blog_1.png"
                alt="Blog Image"
              />
            </div>
            <div className="blogCardText">
              <h2>Google inks pact for new 35-storey office</h2>
              <p>
                That dominion stars lights dominion divide years for fourth have
                don't stars is that he earth it first without heaven in place
                seed it second morning saying.
              </p>
              <span>Tag:Travel,LifeStyle</span>
            </div>
          </div>
          {/* Blog Card End */}
        </div>

        <div className="blogRight col-lg-3 col-md-12 col-sm-12">
          <div className="blogSearch ">
            <input type="text" placeholder="Search Keyword" name='q' />
            <button className='btn btn-outline-secondary' type='submit' >Search</button>
          </div>
          <div className="accordion mt-3" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  <div className="blogCategory">
                    <h6>Categories</h6>
                  </div>
                </button>
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <ul>
                    <li><a href="">Travel</a></li>
                    <li><a href="">Technology</a></li>
                    <li><a href="">Healthy</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  <div className="blogTags">
                    <h6>Tags</h6>
                  </div>
                </button>
              </h2>
              <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <ul>
                    <li><a href="">technology</a></li>
                    <li><a href="">lifestyle</a></li>
                    <li><a href="">design</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Blog;
