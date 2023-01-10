import React from "react";
import "./Search.css";

function Serach() {
   return (
      <div className="wrap">
         <h1>국내 모든 임상시험 검색하고</h1>
         <h1>온라인으로 참여하기</h1>
         <div className="search">
            <input
               type="text"
               className="searchTerm"
               placeholder="질환명을 입력해 주세요."
            />
            <button type="submit" className="searchButton">
               <i className="fa fa-search"></i>
            </button>
         </div>
      </div>
   );
}

export default Serach;
