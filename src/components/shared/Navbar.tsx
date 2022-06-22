import React, { useState } from "react";
import styled from "styled-components";
import { Grid } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getIsLogged, getUser } from "../../features/UserSlice";
import { getScreenSize } from "../../features/GeneralSlice";
import Logo from "../../assets/Logo.svg";
import ProfileIcon from "../../assets/ProfileIcon.svg";
import SettingIcon from "../../assets/SettingIcon.svg";
import SignOutIcon from "../../assets/SignOutIcon.svg";

const Navbar = () => {
  const { t } = useTranslation();
  const is_user_logged_in = useSelector(getIsLogged);
  const screenSize = useSelector(getScreenSize);
  const user = useSelector(getUser);
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const renderActionButtons = () => {
    if (is_user_logged_in) {
      if (screenSize > 550) return renderDesktopLoggedIn();
      else return renderMobileLoggedIn();
    } else {
      if (screenSize > 550) return renderDesktopNotLoggedIn();
      else return renderMobileNotLoggedIn();
    }
  };

  const renderDesktopLoggedIn = () => {
    return (
      <>
        <ActionItem
          container
          item
          justifyContent="center"
          alignItems="center"
          padding="0px 25px 0px 25px"
        >
          <Link to="/profile">
            <ActionIconAndTitleContainer
              container
              item
              flexDirection="row"
              justifyContent="center"
              alignItems="center"
            >
              <ActionIcon src={ProfileIcon} alt="Profile" />
              <ActionText fontSize="21px" margin="5px 5px 0 5px">
                {user && user.first_name}
              </ActionText>
            </ActionIconAndTitleContainer>
          </Link>
        </ActionItem>
      </>
    );
  };

  const renderDesktopNotLoggedIn = () => {
    return (
      <>
        <ActionItem
          container
          item
          justifyContent="center"
          alignItems="center"
          padding="0px 25px 0px 25px"
        >
          <Link to="/sign-in">
            <ActionText fontSize="21px" margin="2px 0 0 0">
              {t<string>("navbar.sign_in_button_text")}
            </ActionText>
          </Link>
        </ActionItem>
        <ActionItem
          container
          item
          justifyContent="center"
          alignItems="center"
          padding="0px 25px 0px 25px"
        >
          <Link to="/sign-up">
            <ActionText fontSize="21px" margin="2px 0 0 0">
              {t<string>("navbar.sign_up_button_text")}
            </ActionText>
          </Link>
        </ActionItem>
      </>
    );
  };

  const renderMobileLoggedIn = () => {
    return (
      <div
        id="close-icon"
        className={isMenuOpened ? "open" : ""}
        onClick={() => setIsMenuOpened(!isMenuOpened)}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <OpenMenu id="open-menu">
          <ActionItem
            container
            item
            justifyContent="center"
            alignItems="center"
          >
            <Link to="/profile">
              <MenuActionIconAndTitleContainer
                container
                item
                flexDirection="row"
                justifyContent="center"
                alignItems="center"
              >
                <ActionIcon
                  src={ProfileIcon}
                  alt="Profile"
                  height="18px"
                  width="18px"
                />
                <ActionText fontSize="18px" margin="5px 0 0 5px">
                  {user && user.first_name}
                </ActionText>
              </MenuActionIconAndTitleContainer>
            </Link>
          </ActionItem>
          <WhiteLine />
          <ActionItem
            container
            item
            justifyContent="center"
            alignItems="center"
          >
            <Link to="/settings">
              <MenuActionIconAndTitleContainer
                container
                item
                flexDirection="row"
                justifyContent="center"
                alignItems="center"
                borderRadius="5px"
              >
                <ActionIcon
                  src={SettingIcon}
                  alt="Settings"
                  height="18px"
                  width="18px"
                />
                <ActionText fontSize="18px" margin="4px 0 0 5px">
                  {t<string>("navbar.settings_button_text")}
                </ActionText>
              </MenuActionIconAndTitleContainer>
            </Link>
          </ActionItem>
          <WhiteLine />
          <ActionItem
            container
            item
            justifyContent="center"
            alignItems="center"
          >
            <Link to="/settings">
              <MenuActionIconAndTitleContainer
                container
                item
                flexDirection="row"
                justifyContent="center"
                alignItems="center"
                borderRadius="5px"
              >
                <ActionIcon
                  src={SignOutIcon}
                  alt="Sign Out"
                  height="18px"
                  width="18px"
                />
                <ActionText fontSize="18px" margin="3px 0 0 5px">
                  {t<string>("navbar.sign_out_button_text")}
                </ActionText>
              </MenuActionIconAndTitleContainer>
            </Link>
          </ActionItem>
        </OpenMenu>
      </div>
    );
  };

  const renderMobileNotLoggedIn = () => {
    return (
      <div
        id="close-icon"
        className={isMenuOpened ? "open" : ""}
        onClick={() => setIsMenuOpened(!isMenuOpened)}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <OpenMenu id="open-menu">
          <ActionItem
            container
            item
            justifyContent="center"
            alignItems="center"
          >
            <Link to="/sign-in">
              <MenuActionIconAndTitleContainer
                container
                item
                flexDirection="row"
                justifyContent="center"
                alignItems="center"
              >
                <ActionIcon
                  src={ProfileIcon}
                  alt="Profile"
                  height="18px"
                  width="18px"
                />
                <ActionText fontSize="18px" margin="5px 0 0 5px">
                  {t<string>("navbar.sign_in_button_text")}
                </ActionText>
              </MenuActionIconAndTitleContainer>
            </Link>
          </ActionItem>
          <WhiteLine />
          <ActionItem
            container
            item
            justifyContent="center"
            alignItems="center"
          >
            <Link to="/sign-up">
              <MenuActionIconAndTitleContainer
                container
                item
                flexDirection="row"
                justifyContent="center"
                alignItems="center"
                borderRadius="5px"
              >
                <ActionIcon
                  src={SettingIcon}
                  alt="Settings"
                  height="18px"
                  width="18px"
                />
                <ActionText fontSize="18px" margin="5px 0 0 5px">
                  {t<string>("navbar.sign_up_button_text")}
                </ActionText>
              </MenuActionIconAndTitleContainer>
            </Link>
          </ActionItem>
        </OpenMenu>
      </div>
    );
  };

  return (
    <NavbarContainer
      container
      direction="row"
      padding={screenSize < 550 ? "0px 15px 0px 15px;" : "0px 40px 0px 40px;"}
    >
      <Link to="/">
        <HeaderContainer container item direction="row" alignItems="center">
          <LogoContainer src={Logo} alt="Company Logo" />
          <ActionText
            fontSize="28px"
            fontWeight="600"
            letterSpacing="2px"
            margin="2px 0 0 15px"
          >
            review
          </ActionText>
        </HeaderContainer>
      </Link>
      <ActionsContainer container item direction="row">
        {renderActionButtons()}
      </ActionsContainer>
    </NavbarContainer>
  );
};

export default Navbar;

// STYLED COMPONENTS

const NavbarContainer = styled(Grid)`
  background-color: #ff4040;
  justify-content: space-between;
  position: relative;
  padding: ${(props: any) => props.padding || "0"};
`;
const HeaderContainer = styled(Grid)`
  width: auto !important;
  &:hover div {
    filter: brightness(0) saturate(100%) invert(14%) sepia(13%) saturate(6%)
      hue-rotate(314deg) brightness(99%) contrast(83%);
  }
  &:hover img {
    filter: brightness(0) saturate(100%) invert(14%) sepia(13%) saturate(6%)
      hue-rotate(314deg) brightness(99%) contrast(83%);
  }
`;
const LogoContainer = styled.img`
  height: 60px;
  width: 60px;
  transition: filter 0.2s ease;
`;
const ActionsContainer = styled(Grid)`
  width: auto !important;
`;
const ActionItem = styled(Grid)`
  width: auto !important;
  padding: ${(props: ActionItemProps) => props.padding || "0px"};
  cursor: pointer;
  transition: background-color 0.2s ease;
  &:hover {
    background-color: #871f1f !important;
  }
`;
const ActionText = styled.div`
  color: white;
  font-family: "Mina", sans-serif;
  transition: filter 0.2s ease;
  letter-spacing: ${(props: ActionTextProps) => props.letterSpacing || "1px"};
  font-size: ${(props: ActionTextProps) => props.fontSize || "22px"};
  font-weight: ${(props: ActionTextProps) => props.fontWeight || 400};
  margin: ${(props: ActionTextProps) => props.margin || "0px"};
`;
const ActionIconAndTitleContainer = styled(Grid)`
  width: auto !important;
`;
const MenuActionIconAndTitleContainer = styled(Grid)`
  justify-content: flex-start !important;
  padding-left: 18% !important;
  width: 180px !important;
  padding: 10px;
`;
const ActionIcon = styled.img`
  width: ${(props: ActionIconProps) => props.width || "25px"};
  height: ${(props: ActionIconProps) => props.height || "25px"};
  margin-right: 10px;
`;
const WhiteLine = styled.div`
  background-color: white;
  height: 1px;
  width: 90%;
  margin-inline: auto;
`;
const OpenMenu = styled(Grid)``;

// INTERFACES

interface ActionIconProps {
  width?: string;
  height?: string;
}
interface ActionItemProps {
  padding?: string;
}
interface ActionTextProps {
  letterSpacing?: string;
  fontSize?: string;
  fontWeight?: string;
  margin?: string;
}
