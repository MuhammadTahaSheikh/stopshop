import React from "react";
import "./News.css";
import newimg1 from "../../Assets/news/newimg1.png";
import newimg2 from "../../Assets/news/newimg2.png";
import newimg3 from "../../Assets/news/newimg3.png";
import date from "../../Assets/news/date.png";
import icon from "../../Assets/news/Icon.png";
function News() {
  const boxes = [
    {
      id: 1,
      content: " 16 Nov 2020",
      content1: "admin",
      img: newimg1,
      main_para: "Necessity May Give Us Your Best Virtual Court System",
    },
    {
      id: 2,
      content: " 16 Nov 2020",
      content1: "admin",
      img: newimg2,
      main_para: "Necessity May Give Us Your Best Virtual Court System",
    },
    {
      id: 3,
      content: " 16 Nov 2020",
      content1: "admin",
      img: newimg3,
      main_para: "Necessity May Give Us Your Best Virtual Court System",
    },
  ];
  return (
    <div className="main_news">
      <div className="container">
        <h1 className="news_heading pt-5 pb-5">
          Latest News and Announcements
        </h1>
        <div className="box-container">
          {boxes.map((box) => (
            <div key={box.id} className="box">
              <div className="new_img_css">
                <img src={box.img} className="new_img_css" />
              </div>
              {/* {box.img} */}
              <div className="box-content">
                <span>
                  <img src={date} />
                  {box.content}
                </span>
                <span>
                  <img src={icon} />
                  {box.content1}
                </span>
              </div>
              <p className="content_main_paragraph">{box.main_para} </p>

              <p className="content_detail_paragraph">
                We denounce with righteous indige nation and dislike men who are
                so beguiled...
              </p>
              <div className="new_learn">Learn More </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default News;
