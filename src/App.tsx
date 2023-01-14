import Serach from "./components/serach/Search";
import * as S from "./AppStyle";

function App() {
   return (
      <>
         <S.GlobalStyle />
         <S.searchWrap>
            <h2>국내 모든 임상시험 검색하고</h2>
            <h2>온라인으로 참여하기</h2>
            <Serach />
         </S.searchWrap>
      </>
   );
}

export default App;
