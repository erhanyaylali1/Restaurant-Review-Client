import { FC } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { getScreenSize } from "../../features/GeneralSlice";
import { days, IRestourantPageResponse } from "../../interfaces/IRestourant";
import Text from "../shared/Text";
import Map from "./Map";

type Props = {
  data: IRestourantPageResponse;
};

const FacilityTab: FC<Props> = ({ data }) => {
  const { t } = useTranslation();
  const screenSize = useSelector(getScreenSize);
  const styles: IDynamicStyles = calculateDynamicStyles(screenSize);

  const renderHours = () => {
    return Object.keys(data.facility.hours).map((hours_key) => {
      return (
        <div className="row mb-2" key={hours_key}>
          <div className="col-6 text-left">
            <Text
              text={t<string>(`restourant_page.facilities.${hours_key}`)}
              fontSize="18px"
              fontFamily="Montserrat"
              fontWeight="600"
            />
          </div>
          <div className="col-6 text-right">
            <Text
              text={
                (data.facility.hours[hours_key as days].start || "") +
                " - " +
                (data.facility.hours[hours_key as days].end || "")
              }
              fontSize="16px"
              fontFamily="Montserrat"
              fontWeight="400"
            />
          </div>
        </div>
      );
    });
  };

  const renderTags = () => {
    return data.facility.tags.map((tag) => (
      <div className="col-6 text-left mb-2" key={tag._id}>
        <Text
          text={tag.name}
          fontSize="16px"
          fontFamily="Montserrat"
          fontWeight="400"
        />
      </div>
    ));
  };

  const renderPhotos = () => {
    return data.facility.photos
      .slice(0, styles.image_strict_number)
      .map((photo, index) => {
        if (index === styles.image_strict_number - 1) {
          return (
            <div
              key={photo}
              className={`col-sm-6 col-md-4 col-lg-4 m-0 p-0 ${styles.photosMarginBottom} ${styles.photosPaddingInline}`}
              style={{ position: "relative" }}
            >
              <BlurredImage src={photo} alt={`restourant-photos-${index}`} />
              <SeeMoreText>
                <Text
                  text={t<string>("restourant_page.facilities.see_more")}
                  fontFamily="Montserrat"
                  fontSize="20px"
                  fontWeight="600"
                />
              </SeeMoreText>
            </div>
          );
        } else {
          return (
            <div
              key={photo}
              className={`col-sm-6 col-md-4 col-lg-4 m-0 p-0 ${styles.photosMarginBottom} ${styles.photosPaddingInline}`}
            >
              <Image src={photo} alt={`restourant-photos-${index}`} />
            </div>
          );
        }
      });
  };

  return (
    <Container className="row m-0 mt-5">
      {/* BIO-TAGS-HOURS */}
      <div className="col-sm-12 col-lg-5">
        <div className="row m-0 p-0">
          {/* BIO-TAGS */}
          <div className="col-sm-12 col-md-6 col-lg-12 p-0">
            {/* BIO */}
            <div>
              <div className="row">
                <div className="col-12 text-left">
                  <Text
                    text={t<string>("restourant_page.facilities.bio")}
                    fontSize="40px"
                    fontFamily="Markazi Text"
                    fontWeight="500"
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-6 text-left">
                  <Text
                    text={t<string>("restourant_page.facilities.average_rate")}
                    fontSize="16px"
                    fontFamily="Montserrat"
                    fontWeight="600"
                  />
                </div>
                <div className="col-6 text-left">
                  <Text
                    text={String(data.facility.rate)}
                    fontSize="16px"
                    fontFamily="Montserrat"
                    fontWeight="400"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-6 text-left mt-2">
                  <Text
                    text={t<string>("restourant_page.facilities.price_range")}
                    fontSize="16px"
                    fontFamily="Montserrat"
                    fontWeight="600"
                  />
                </div>
                <div className="col-6 text-left mt-2">
                  <Text
                    text={
                      t<string>("restourant_page.facilities.price_range_text") +
                      "  " +
                      String(data.facility.price) +
                      "€"
                    }
                    fontSize="16px"
                    fontFamily="Montserrat"
                    fontWeight="400"
                  />
                </div>
              </div>
            </div>
            {/* TAGS */}
            <div className="my-5 p-0">
              <div className="row">
                <div className="col-12 text-left">
                  <Text
                    text={t<string>("restourant_page.facilities.tags")}
                    fontSize="40px"
                    fontFamily="Markazi Text"
                    fontWeight="500"
                  />
                </div>
              </div>
              <div className="row mt-3">{renderTags()}</div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-12 p-0">
            {/* HOURS */}
            <div className="mt-0 p-0">
              <div className="row mb-3">
                <div className="col-12 text-left">
                  <Text
                    text={t<string>("restourant_page.facilities.hours")}
                    fontSize="40px"
                    fontFamily="Markazi Text"
                    fontWeight="500"
                  />
                </div>
              </div>
              {renderHours()}
            </div>
          </div>
        </div>
      </div>
      {/* MAPS-CONTACT */}
      <div
        className={`col-sm-12 col-lg-7 m-0 ${styles.photosContainerMarginTop} mb-5`}
      >
        <div className="row m-0 p-0">
          {/* PHOTOS */}
          <div className="mt-0 p-0">
            <div className="row m-0">
              <div className="col-12 text-left m-0 p-0">
                <Text
                  text={t<string>("restourant_page.facilities.photos")}
                  fontSize="40px"
                  fontFamily="Markazi Text"
                  fontWeight="500"
                />
              </div>
            </div>
            <div
              className="row mt-1"
              style={{ marginInline: "-0.5rem !important" }}
            >
              {renderPhotos()}
            </div>
          </div>
          {/* Contact */}
          <div className="mt-5 p-0">
            <div className="row m-0">
              <div className="col-12 text-left m-0 p-0">
                <Text
                  text={t<string>("restourant_page.facilities.contact")}
                  fontSize="40px"
                  fontFamily="Markazi Text"
                  fontWeight="500"
                />
              </div>
            </div>
            <div className="row mt-4 align-items-center">
              {/* MAP */}
              <div className="col-sm-12 col-md-8">
                <Map address={data.facility.contact.address.full_address} />
              </div>
              <div
                className={`col-sm-12 col-md-4 ${styles.address_margin_top}`}
              >
                {/* ADDRESS */}
                <div>
                  <Text
                    text={t<string>("restourant_page.facilities.address")}
                    fontSize="16px"
                    fontFamily="Montserrat"
                    fontWeight="600"
                  />
                  <Text
                    text={data.facility.contact.address.full_address}
                    fontSize="16px"
                    fontFamily="Montserrat"
                    fontWeight="400"
                    margin="5px 0 0 0"
                  />
                </div>
                {/* PHONE */}
                <div className="mt-4">
                  <Text
                    text={t<string>("restourant_page.facilities.phone")}
                    fontSize="16px"
                    fontFamily="Montserrat"
                    fontWeight="600"
                  />
                  <Text
                    text={data.facility.contact.address.phone}
                    fontSize="16px"
                    fontFamily="Montserrat"
                    fontWeight="400"
                    margin="5px 0 0 0"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default FacilityTab;

const Container = styled.div`
  padding-inline: 5% !important;
`;

const Image = styled.img`
  border-radius: 10px;
  width: 100%;
  min-width: 100%;
  max-width: 100%;
  height: 150px;
  object-fit: cover;
  object-position: center;
  border-radius: 15px;
`;

const BlurredImage = styled.img`
  border-radius: 0px;
  width: 100%;
  height: 150px;
  object-fit: cover;
  object-position: center;
  opacity: 0.3;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 15px;
`;

const SeeMoreText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const calculateDynamicStyles = (screenSize: number): IDynamicStyles => {
  const styles = {
    photosMarginBottom: "mt-2",
    photosContainerMarginTop: "mt-2",
    photosPaddingInline: "px-0",
    image_strict_number: 3,
    address_margin_top: "mt-3",
  };
  if (screenSize < 400) {
    styles.photosMarginBottom = "mt-3";
    styles.photosContainerMarginTop = "mt-5";
    styles.photosPaddingInline = "px-0";
    styles.image_strict_number = 3;
    styles.address_margin_top = "mt-3";
  } else if (screenSize < 850) {
    styles.photosMarginBottom = "mt-2";
    styles.photosContainerMarginTop = "mt-5";
    styles.photosPaddingInline = "px-2";
    styles.image_strict_number = 5;
    styles.address_margin_top = "mt-3";
  } else if (screenSize < 1100) {
    styles.photosMarginBottom = "mt-2";
    styles.photosContainerMarginTop = "mt-0";
    styles.photosPaddingInline = "px-2";
    styles.image_strict_number = 5;
    styles.address_margin_top = "mt-0";
  } else if (screenSize < 1450) {
    styles.photosMarginBottom = "mt-2";
    styles.photosContainerMarginTop = "mt-0";
    styles.photosPaddingInline = "px-2";
    styles.image_strict_number = 5;
    styles.address_margin_top = "mt-0";
  }
  return styles;
};

type IDynamicStyles = {
  photosMarginBottom: string;
  photosPaddingInline: string;
  photosContainerMarginTop: string;
  image_strict_number: number;
  address_margin_top: string;
};
