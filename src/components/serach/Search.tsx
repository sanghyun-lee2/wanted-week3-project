import React, { useState, useEffect } from "react";

import { recommandAPI } from "../../api/api";

import useDebounce from "../../util/debounce";

import RecommendIfe from "../../interface/interface";

import "./Search.css";

function Serach() {
   const [searchWord, setSearchWord] = useState("");
   const [recommendList, setRecommendList] = useState<RecommendIfe[]>([]);
   const [selectIdx, setSelectIdx] = useState(-1);

   const getRecommends = async (word: string) => {
      try {
         const res = await recommandAPI.getRecommends(word);
         const Recommends: RecommendIfe[] = [...res.data];
         if (Recommends.length > 0) {
            setRecommendList(Recommends);
         } else {
            setRecommendList([]);
         }
         console.info("calling api");
      } catch {
         console.log("error API");
      }
   };

   useEffect(() => {
      setSelectIdx(-1);
   }, [recommendList]);

   useEffect(() => {
      if (searchWord.length > 0) {
         getRecommends(searchWord);
      } else {
         setRecommendList([]);
      }
   }, [searchWord]);

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchWord(e.target.value);
   };

   const debounceHandleChange = useDebounce<[React.ChangeEvent<HTMLInputElement>]>(
      handleChange,
      500
   );

   const handleOnClickSerach = () => {
      console.log("OnClick Serach");
   };

   const makeBold = (item: string, word: string) => {
      var re = new RegExp(word, "g");
      return item.replace(re, "<i>" + word + "</i>");
   };

   const ArrowDown = "ArrowDown";
   const ArrowUp = "ArrowUp";
   const Escape = "Escape";

   const handleKeyArrow = (e: React.KeyboardEvent) => {
      if (recommendList.length > 0) {
         switch (e.key) {
            case ArrowDown: //키보드 아래 키
               setSelectIdx(selectIdx + 1);
               if (recommendList.length === selectIdx + 1) setSelectIdx(0);
               break;
            case ArrowUp: //키보드 위에 키
               setSelectIdx(selectIdx - 1);
               if (selectIdx <= 0) {
                  setSelectIdx(-1);
               }
               break;
            case Escape: // esc key를 눌렀을때,
               setSelectIdx(-1);
               break;
         }
      }
   };

   const debounceHandleKeyArrow = useDebounce<[React.KeyboardEvent]>(handleKeyArrow, 100);

   return (
      <>
         <div className="search" onKeyDown={debounceHandleKeyArrow}>
            <input
               type="text"
               className="searchTerm"
               placeholder="질환명을 입력해 주세요."
               onChange={debounceHandleChange}
            />
            <button type="submit" className="searchButton" onClick={handleOnClickSerach}>
               검색
            </button>
         </div>
         <ul className="recommendContainer">
            {searchWord.length === 0 && <div className="recommend">검색어가 없습니다.</div>}
            {recommendList.length > 0 &&
               recommendList.map((recommend: RecommendIfe, idx: number) => (
                  <li
                     // className={`recommend ${idx === selectIdx ? "sel" : ""}`}
                     key={idx}
                     dangerouslySetInnerHTML={{
                        __html: makeBold(recommend.sickNm, searchWord),
                     }}
                  ></li>
               ))}
         </ul>
      </>
   );
}

export default Serach;
