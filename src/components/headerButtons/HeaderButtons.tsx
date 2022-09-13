import { Link } from "react-router-dom";
import { Button } from 'primereact/button';
import { headerButtonContainerStyle, linkStyle } from './style';
import headerButtonData from '../../data/headerButton';
import HeaderButton from '../../models/HeaderButton';

const renderButtons = () => {
  const buttons = headerButtonData.map(
    (headerButton:HeaderButton) => (
      headerButton.hasIcon
      ? (
        <Link key={headerButton.id} to={headerButton.url} style={linkStyle}>
          <Button
            label={headerButton.title}
            icon={headerButton.icon}
          />
        </Link>
      )
      : (
        <Link key={headerButton.id} to={headerButton.url} style={linkStyle}>
          <Button
            label={headerButton.title}
          />
        </Link>
        
      )
    )
  );
  return buttons;
};
const HeaderButtons = () => (
  <div style={headerButtonContainerStyle}>
    {renderButtons()}
  </div>
);

export default HeaderButtons;