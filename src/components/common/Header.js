import { Link } from "react-router-dom";
import "../../scss/common/_header.scss";

/* 
  a 태그 href 를 이용하면 페이지 갱신(MPA)
  Link 컴포넌트를 이용하면 컴포넌트 갱신(SPA)
  : a 태그로 자동 변환이 된다
  : to="URI" 라는 props 가 필요하다
*/

const Header = () => {
  return (
    <haeder>
      <div className="inner">
        <h1>
          <Link to="/">Logo</Link>
        </h1>
        <ul>
          <li>
            <Link to="/department">Department</Link>
          </li>
          <li>
            <Link to="/community">Community</Link>
          </li>
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
          <li>
            <Link to="/youtube">Youtube</Link>
          </li>
          <li>
            <Link to="/location">Location</Link>
          </li>
          <li>
            <Link to="/join">Join</Link>
          </li>
        </ul>
      </div>
    </haeder>
  );
};

export default Header;
