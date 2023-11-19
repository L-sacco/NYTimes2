import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="top-footer">
        <img src="..\src\assets\logo.png" alt="New York Times Logo" style={{ width: "13rem" }} />
      </div>
      <div className="mid-footer">
        <div>
          <h5>NEWS</h5>
          <ul>
            <li>Home Page</li>
            <li>World</li>
            <li>Coronavirus</li>
            <li>U.S.</li>
            <li>Politics</li>
            <li>New York</li>
            <li>Business</li>
            <li>Tech</li>
            <li>Science</li>
            <li>Sports</li>
            <li>Wildfire Tracker</li>
            <li>Obituaries</li>
            <li>Today&apos;s Paper</li>
            <li>Corrections</li>
            <li>Trending</li>
          </ul>
        </div>
        <div>
          <h5>OPINION</h5>
          <ul>
            <li>Today&apos;s Opinion</li>
            <li>Columnists</li>
            <li>Editorials</li>
            <li>Guest Essays</li>
            <li>Letters</li>
            <li>Sunday Opinion</li>
            <li>Opinion Video</li>
          </ul>
        </div>
        <div>
          <h5>ARTS</h5>
          <ul>
            <li>Today&apos;s Arts</li>
            <li>Art & Design</li>
            <li>Books</li>
            <li>Best Sellers Book List</li>
            <li>Dance</li>
            <li>Movies</li>
            <li>Music</li>
            <li>Pop Culture</li>
            <li>Television</li>
            <li>Theater</li>
            <li>Video: Arts</li>
          </ul>
        </div>
        <div>
          <h5>LIVING</h5>
          <ul>
            <li>Automotive</li>
            <li>Games</li>
            <li>Education</li>
            <li>Food</li>
            <li>Health</li>
            <li>Jobs</li>
            <li>Love</li>
            <li>Magazine</li>
            <li>Parenting</li>
            <li>Real Estate</li>
            <li>Style</li>
            <li>T Magazine</li>
            <li>Travel</li>
          </ul>
        </div>
        <div>
          <h5>MORE</h5>
          <ul>
            <li>Reader Center</li>
            <li>The Athletic</li>
            <li>Wirecutter</li>
            <li>Cooking</li>
            <li>Headway</li>
            <li>Live Events</li>
            <li>The Learning Network</li>
            <li>Podcasts</li>
            <li>Video</li>
            <li>Graphics</li>
            <li>TimesMachine</li>
            <li>Times Store</li>
            <li>Manage My Account</li>
            <li>Gift Articles</li>
            <li>NYTLicensing</li>
          </ul>
        </div>
        <div style={{ borderLeft: "1px solid #e2e2e2", padding: "0 1rem" }}>
          <h5>SUBSCRIBE</h5>
          <div>
            <ul className="bold-li">
              <li>
                <svg viewBox="0 0 14 13" fill="#000" style={{ width: "15px" }}>
                  <path d="M13.1,11.7H3.5V1.2h9.6V11.7zM13.1,0.4H3.5C3,0.4,2.6,0.8,2.6,1.2v2.2H0.9C0.4,3.4,0,3.8,0,4.3v5.2v1.5c0,0.8,0.8,1.5,1.8,1.5h1.7h0h7.4h2.2c0.5,0,0.9-0.4,0.9-0.9V1.2C14,0.8,13.6,0.4,13.1,0.4"></path>
                  <polygon points="10.9,3 5.2,3 5.2,3.9 11.4,3.9 11.4,3"></polygon>
                  <rect x="5.2" y="4.7" width="6.1" height="0.9"></rect>
                  <rect x="5.2" y="6.5" width="6.1" height="0.9"></rect>
                </svg>
                Home Delivery
              </li>
              <li>
                <svg viewBox="0 0 10 13" style={{ width: "15px" }}>
                  <path
                    fill="#000"
                    d="M9.9,8c-0.4,1.1-1.2,1.9-2.3,2.4V8l1.3-1.2L7.6,5.7V4c1.2-0.1,2-1,2-2c0-1.4-1.3-1.9-2.1-1.9c-0.2,0-0.3,0-0.6,0.1v0.1c0.1,0,0.2,0,0.3,0c0.5,0,0.9,0.2,0.9,0.7c0,0.4-0.3,0.7-0.8,0.7C6,1.7,4.5,0.6,2.8,0.6c-1.5,0-2.5,1.1-2.5,2.2C0.3,4,1,4.3,1.6,4.6l0-0.1C1.4,4.4,1.3,4.1,1.3,3.8c0-0.5,0.5-0.9,1-0.9C3.7,2.9,6,4,7.4,4h0.1v1.7L6.2,6.8L7.5,8v2.4c-0.5,0.2-1.1,0.3-1.7,0.3c-2.2,0-3.6-1.3-3.6-3.5c0-0.5,0.1-1,0.2-1.5l1.1-0.5V10l2.2-1v-5L2.5,5.5c0.3-1,1-1.7,1.8-2l0,0C2.2,3.9,0.1,5.6,0.1,8c0,2.9,2.4,4.8,5.2,4.8C8.2,12.9,9.9,10.9,9.9,8L9.9,8z"></path>
                </svg>
                Digital Subscriptions
              </li>
              <li>
                <svg viewBox="0 0 13 13" fill="#000" style={{ width: "15px" }}>
                  <polygon points="0,-93.6 0,-86.9 6.6,-93.6"></polygon>
                  <polygon points="0.9,-86 7.5,-86 7.5,-92.6"></polygon>
                  <polygon points="0,-98 0,-94.8 8.8,-94.8 8.8,-86 12,-86 12,-98"></polygon>
                  <path d="M11.9-40c-0.4,1.1-1.2,1.9-2.3,2.4V-40l1.3-1.2l-1.3-1.2V-44c1.2-0.1,2-1,2-2c0-1.4-1.3-1.9-2.1-1.9c-0.2,0-0.3,0-0.6,0.1v0.1c0.1,0,0.2,0,0.3,0c0.5,0,0.9,0.2,0.9,0.7c0,0.4-0.3,0.7-0.8,0.7c-1.3,0-2.8-1.1-4.5-1.1c-1.5,0-2.5,1.1-2.5,2.2c0,1.1,0.6,1.5,1.3,1.7l0-0.1c-0.2-0.1-0.4-0.4-0.4-0.7c0-0.5,0.5-0.9,1-0.9C5.7-45.1,8-44,9.4-44h0.1v1.7l-1.3,1.1L9.5-40v2.4c-0.5,0.2-1.1,0.3-1.7,0.3c-2.2,0-3.6-1.3-3.6-3.5c0-0.5,0.1-1,0.2-1.5l1.1-0.5v4.9l2.2-1v-5l-3.3,1.5c0.3-1,1-1.7,1.8-2l0,0c-2.2,0.5-4.3,2.1-4.3,4.6c0,2.9,2.4,4.8,5.2,4.8C10.2-35.1,11.9-37.1,11.9-40L11.9-40z"></path>
                  <path d="M12.2-23.7c-0.2,0-0.4,0.2-0.4,0.4v0.4L0.4-19.1v2.3l3,1l-0.2,0.6c-0.3,0.8,0.1,1.8,0.9,2.1l1.7,0.7c0.2,0.1,0.4,0.1,0.6,0.1c0.6,0,1.3-0.4,1.5-1l0.4-0.9l3.5,1.2v0.4c0,0.2,0.2,0.4,0.4,0.4c0.2,0,0.4-0.2,0.4-0.4v-10.7C12.6-23.5,12.4-23.7,12.2-23.7M7.1-13.6c-0.2,0.4-0.6,0.6-1,0.4l-1.7-0.7c-0.4-0.2-0.6-0.6-0.4-1l0.3-0.7l3.3,1.1L7.1-13.6z"></path>
                  <path d="M13.1-60.3H3.5v-10.5h9.6V-60.3zM13.1-71.6H3.5c-0.5,0-0.9,0.4-0.9,0.9v2.2H0.9c-0.5,0-0.9,0.4-0.9,0.9v5.2v1.5c0,0.8,0.8,1.5,1.8,1.5h1.7h0h7.4h2.2c0.5,0,0.9-0.4,0.9-0.9v-10.5C14-71.2,13.6-71.6,13.1-71.6"></path>
                  <polygon points="10.9,-69 5.2,-69 5.2,-68.1 11.4,-68.1 11.4,-69"></polygon>
                  <rect x="5.2" y="-67.3" width="6.1" height="0.9"></rect>
                  <rect x="5.2" y="-65.5" width="6.1" height="0.9"></rect>
                  <path d="M12,6.5H6.5V12H1V6.5h5.5V1H12V6.5zM12,0H1C0.4,0,0,0.5,0,1v11c0,0.6,0.4,1,1,1h11c0.5,0,1-0.4,1-1V1C13,0.5,12.5,0,12,0"></path>
                </svg>
                Games
              </li>
              <li>
                <svg viewBox="0 0 13 13" fill="#000" style={{ width: "15px" }}>
                  <path d="M12,2.9L9.6,5.2c-0.1,0.1-0.3,0.1-0.4,0C9.1,5.2,9.1,5,9.3,4.9l2.4-2.4c-0.2-0.2-0.3-0.3-0.5-0.5L8.7,4.3c-0.1,0.1-0.3,0.1-0.4,0C8.2,4.3,8.2,4.1,8.4,4l2.4-2.4c-0.3-0.3-0.5-0.5-0.5-0.5L7.6,3.4C7.1,4,6.8,5.1,7.1,5.8c-1.4,1-4.6,3.5-5.1,4c-0.8,0.8-0.4,1.8-0.3,1.9c0,0,0,0,0,0c0,0,0,0,0,0c0.1,0.1,1.1,0.5,1.9-0.3c0.4-0.4,2.9-3.6,3.9-5C8.4,6.9,9.6,6.6,10.2,6l2.3-2.6C12.5,3.4,12.3,3.2,12,2.9z"></path>
                  <path d="M0.8,1.9l0.3-0.3c0.9-0.9,3.2,1.1,3.8,1.7s0.9,1.8,0.4,2.6c1.4,1.1,4.6,3.5,5,3.9c0.8,0.8,0.4,1.8,0.3,1.9c0,0,0,0,0,0c0,0,0,0,0,0c-0.1,0.1-1.1,0.5-1.9-0.3c-0.4-0.4-2.9-3.7-4-5.1C3.9,6.7,2.9,6.4,2.3,5.8S-0.2,2.9,0.8,1.9z"></path>
                </svg>
                Cooking
              </li>
            </ul>
          </div>
          <div style={{ borderBottom: "1px solid #e2e2e2" }}>
            <ul className="lil-ul">
              <li>Email Newsletters</li>
              <li>Corporate Subscriptions</li>
              <li>Education Rate</li>
            </ul>
          </div>
          <div>
            <ul className="lil-ul">
              <li>Mobile Applications</li>
              <li>Replica Edition</li>
              <li>International</li>
              <li>Canada</li>
              <li>Español</li>
              <li>中文网</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bot-footer">
        <ul>
          <li>© 2023 The New York Times Company</li>
          <li>NYTCo</li>
          <li>Contact Us</li>
          <li>Accessibility</li>
          <li>Work with us</li>
          <li>Advertise</li>
          <li>T Brand Studio</li>
          <li>Your Ad Choices</li>
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
          <li>Terms of Sale</li>
          <li>Site Map</li>
          <li>Help</li>
          <li>Subscriptions</li>
        </ul>
      </div>
    </div>
  );
}
