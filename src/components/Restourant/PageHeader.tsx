import { FC } from "react";
import type { IRestourantPageResponse } from "../../interfaces/IRestourant";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { getScreenSize } from "../../features/GeneralSlice";
import Text from "../shared/Text";

type Props = {
  data: IRestourantPageResponse;
};

const RestourantPageHeader: FC<Props> = ({ data }) => {
  const { t } = useTranslation();
  const screenSize = useSelector(getScreenSize);
  const styles: IDynamicStyles = calculateDynamicStyles(screenSize);

  return (
    <div className="col">
      <ImageContainer className="row m-0 p-0">
        {data.profilePhoto ? (
          <Image
            className="p-0"
            src={data.profilePhoto}
            width="100%"
            height={styles.imageHeight}
          />
        ) : null}
        <StatusContainer>
          {data.isOpen ? (
            <div className="d-flex flex-row align-items-center">
              <StatusIcon isOpen={true} />
              <Text
                text={t<string>("restourant_page.now_open")}
                fontFamily="Montserrat"
                fontSize="15px"
                margin={styles.statusTextMarginLeft}
              />
            </div>
          ) : (
            <div className="d-flex flex-row align-items-center">
              <StatusIcon isOpen={false} />
              <Text
                text={t<string>("restourant_page.closed_now")}
                fontFamily="Montserrat"
                fontSize="15px"
                margin={styles.statusTextMarginLeft}
              />
            </div>
          )}
        </StatusContainer>
        <NameContainer className="d-flex flex-row align-items-center">
          <Logo
            src={data.logo}
            width={styles.logoWidth}
            height={styles.logoWidth}
          />
          <Text
            text={data.name}
            fontFamily="Montserrat"
            fontSize={styles.nameFontSize}
            margin={styles.nameMarginLeft}
          />
        </NameContainer>
      </ImageContainer>
    </div>
  );
};

export default RestourantPageHeader;

const ImageContainer = styled.div`
  position: relative;
`;

const Image = styled.img`
  width: ${(props: ImageProps) => props.width || "auto"};
  height: ${(props: ImageProps) => props.height || "auto"};
  margin: ${(props: ImageProps) => props.margin || "0 0 0 0"};
  object-fit: cover;
  opacity: 0.9;
  background-color: rgba(51, 51, 51, 0.5);
`;

const StatusContainer = styled.div`
  position: absolute;
  width: max-content;
  padding: 5px 12px;
  border-radius: 25px;
  top: 5%;
  right: 2%;
  background-color: rgba(255, 255, 255, 0.8);
`;

const StatusIcon = styled.div`
  height: 15px;
  width: 15px;
  padding: 0px;
  border-radius: 50%;
  background-color: ${(props: StatusIconProps) =>
    props.isOpen ? "#2E982C" : "red"};
`;

const NameContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: max-content;
  padding: 10px 20px;
  border-top-right-radius: 25px;
  background-color: rgba(255, 255, 255, 0.8);
`;

const Logo = styled.img`
  width: ${(props: ImageProps) => props.width || "auto"};
  height: ${(props: ImageProps) => props.height || "auto"};
  margin: ${(props: ImageProps) => props.margin || "0 0 0 0"};
  object-fit: cover;
`;

const calculateDynamicStyles = (screenSize: number): IDynamicStyles => {
  const styles = {
    imageHeight: "210px",
    statusTextMarginLeft: "0 0 0 5px",
    logoWidth: "40px",
    nameFontSize: "20px",
    nameMarginLeft: "0 0 0 20px",
  };
  if (screenSize < 400) {
    styles.imageHeight = "210px";
    styles.statusTextMarginLeft = "0 0 0 5px";
    styles.logoWidth = "40px";
    styles.nameFontSize = "15px";
    styles.nameMarginLeft = "0 0 0 20px";
  } else if (screenSize < 650) {
    styles.imageHeight = "240px";
    styles.statusTextMarginLeft = "0 0 0 6px";
    styles.logoWidth = "40px";
    styles.nameFontSize = "20px";
    styles.nameMarginLeft = "0 0 0 20px";
  } else if (screenSize < 850) {
    styles.imageHeight = "300px";
    styles.statusTextMarginLeft = "0 0 0 7px";
    styles.logoWidth = "45px";
    styles.nameFontSize = "25px";
    styles.nameMarginLeft = "0 0 0 20px";
  } else if (screenSize < 1100) {
    styles.imageHeight = "350px";
    styles.statusTextMarginLeft = "0 0 0 9px";
    styles.logoWidth = "55px";
    styles.nameFontSize = "30px";
    styles.nameMarginLeft = "0 0 0 20px";
  } else if (screenSize < 1450) {
    styles.imageHeight = "400px";
    styles.statusTextMarginLeft = "0 0 0 10px";
    styles.logoWidth = "55px";
    styles.nameFontSize = "30px";
    styles.nameMarginLeft = "0 0 0 20px";
  }
  return styles;
};

type IDynamicStyles = {
  imageHeight: string;
  statusTextMarginLeft: string;
  logoWidth: string;
  nameFontSize: string;
  nameMarginLeft: string;
};

type ImageProps = {
  width?: string;
  height?: string;
  margin?: string;
};

type StatusIconProps = {
  isOpen: boolean;
};
