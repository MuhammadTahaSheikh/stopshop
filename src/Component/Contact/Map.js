import React from "react";
import "./Map.css"
function Map() {
    return (
        <div className='main_div_map_hoempage'>
        <div className='row'>
          <div className='col-lg-12 col-md-12 col-12 p-0 mt-5 '>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2986.4663524555617!2d-72.9923800235294!3d41.537498786669886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e7c6cdaced91e1%3A0xa63a12b3a4ca165!2s16%20Stonefield%20Dr%2C%20Waterbury%2C%20CT%2006705%2C%20USA!5e0!3m2!1sen!2s!4v1714744272508!5m2!1sen!2s"
              width="100%"
              height="480"
              className='map_setting_style'
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          
        </div>
        </div>
      );
    }

export default Map
