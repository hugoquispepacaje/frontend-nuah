import { headerStyle, headerTitleStyle } from './style';
import HeaderButtons from '../headerButtons/HeaderButtons';

const Header = () => (
  <header style={headerStyle} >
    <h1 style={headerTitleStyle}>Forever 21</h1>
    <HeaderButtons />
  </header>
);

export default Header;