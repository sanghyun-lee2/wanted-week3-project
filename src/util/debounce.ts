import { useRef } from "react";

function useDebounce<T extends any[]>(callback: (...params: T) => void, time: number) {
   const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
   return (...params: T) => {
      // 실행한 함수(setTimeout())를 취소
      if (timer.current) clearTimeout(timer.current);
      // delay가 지나면 callback 함수를 실행
      timer.current = setTimeout(() => {
         callback(...params);
         timer.current = null;
      }, time);
   };
}

export default useDebounce;
