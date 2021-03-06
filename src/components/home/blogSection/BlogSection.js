import React from "react";
import { Link } from "react-router-dom";
import "./BlogSection.css";

export const BlogSection = () => {
  return (
    <div className="blog-container">
      <div className="first-blog">
        <div className="blog-image">
          <img
            className="blog-image--image"
            src="./assets/images/blog-section/blog-image-1.png"
            alt="coffes placed around a table"
          />
        </div>
        <div className="blog-content">
          <p className="blog-title">Coffee - The Miracle Drink</p>
          <p className="blog-content--content">
            Since coffee contains caffeine, this popular beverage can help
            people feel less tired, increase energy level.{" "}
            <span>
              <Link to="/post1">Read More...</Link>
            </span>
          </p>
        </div>
      </div>
      <div className="second-blog">
        <div className="blog-image">
          <img
            className="blog-image--image"
            src="./assets/images/blog-section/blog-image-2.png"
            alt="People holding their coffees for a cheers"
          />
        </div>
        <div className="blog-content">
          <p className="blog-title">Bonding over A Coffee</p>
          <p className="blog-content--content">
            Coffee has been identified as the most common and beloved drinks
            over the world from households to workplaces{" "}
            <span>
              <Link to="/post2">Read More...</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
