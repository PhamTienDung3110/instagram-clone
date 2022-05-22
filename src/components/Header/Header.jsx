import "./Header.css";
import HomeIcon from '@mui/icons-material/Home';
import SendIcon from '@mui/icons-material/Send';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ExploreIcon from '@mui/icons-material/Explore';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function Header() {
  return (
    <div className="header">
      <div className="header__container">
        <div className="header__logo">
          <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" />
        </div>
        <div className="header__search">
          <input type="text" placeholder='&#x1F50E;&#xFE0E; Search'/> 
        </div>
      </div>
      <div className="header__icons">
        <HomeIcon/>
        <SendIcon/>
        <AddCircleOutlineIcon/>
        <ExploreIcon/>
        <FavoriteBorderIcon/>
        <img src="https://via.placeholder.com/50" alt="profile" class="profile__img" />
      </div>
    </div>
  );
}

export default Header;
