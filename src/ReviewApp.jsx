import React, { useState } from "react";
import Header from "./components/Header";
import ReviewForm from "./components/ReviewForm";
import SearchBar from "./components/SearchBar";
import ReviewList from "./components/ReviewList";
import DarkModeToggle from "./components/DarkModeToggle";
import "./App.css";

function ReviewApp() {
  const [reviews, setReviews] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const addReview = (newReview) => {
    const currentDate = new Date().toLocaleDateString();
    const reviewItem = { text: newReview, date: currentDate };
    setReviews([...reviews, reviewItem]);
  };

  const filteredReviews = reviews.filter((review) =>
    review.text.toLowerCase().includes(searchKeyword.toLowerCase())
  );

  const deleteReview = (index) => {
    const updatedReviews = [...reviews];
    updatedReviews.splice(index, 1);
    setReviews(updatedReviews);
  };

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <Header />
      <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className="search">
        <SearchBar
          searchKeyword={searchKeyword}
          setSearchKeyword={setSearchKeyword}
        />
      </div>
      <div className="content">
        <ReviewList reviews={filteredReviews} deleteReview={deleteReview} />
        <ReviewForm addReview={addReview} />
      </div>
    </div>
  );
}

export default ReviewApp;
