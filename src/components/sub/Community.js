import React, { useEffect } from "react";
import Layout from "../common/Layout";

const Community = () => {
  // javascript 코드 자리
  // 컴포넌트가 마운트, 업데이트(state 변경), 언마운트 시
  // 하고 싶은 일을 작성하는 Hook : useEffect
  // useEffect(()=>{
  //   // 하고 싶은 일
  //   // 클린업 함수 : 컴포넌트 제거시 실행
  //   return () => {}
  // }, [의존성배열: dependency Array]);

  useEffect(() => {
    console.log("mount : 컴포넌트 생성");
    return () => {
      console.log("unmount : 컴포넌트 제거");
    };
  }, []);

  // jsx 코드 자리
  // : 주의사항 return () O
  // : 주의사항 return {} X
  return <Layout title={"Community"}>Community</Layout>;
};

export default Community;
