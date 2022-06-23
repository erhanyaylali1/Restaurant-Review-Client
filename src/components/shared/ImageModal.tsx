import { FC, useEffect, useState } from "react";
import { Carousel } from "antd";
import styled from "styled-components";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import { getScreenSize } from "../../features/GeneralSlice";

type Props = {
  index: number;
  setIndex: (index: number) => void;
  images: string[];
};

const ImageModal: FC<Props> = ({ index, images, setIndex }) => {
  const [orderedImages, setOrderedImages] = useState(images);
  const screenSize = useSelector(getScreenSize);
  const styles: IDynamicStyles = calculateDynamicStyles(screenSize);

  useEffect(() => {
    const firstParts = images.slice(0, index);
    const secondParts = images.slice(index);
    setOrderedImages([...secondParts.concat(firstParts)]);
  }, [index, images]);

  const renderImages = () => {
    return orderedImages.map((image, index) => {
      return (
        <Image
          height={styles.selectedImageHeight}
          src={image}
          key={index}
          alt={`restourant-image-${index}`}
        />
      );
    });
  };

  const renderImageList = () => {
    return images.map((image, index) => {
      return (
        <div className="image-modal-list">
          <ImageListItem
            width={styles.imageListItemWidth}
            height={styles.imageListItemHeight}
            key={index}
            src={image}
            onClick={() => setIndex(index)}
            alt={`restourant-images-${index}`}
          />
        </div>
      );
    });
  };

  return (
    <Container>
      <div style={{ position: "relative" }}>
        <Carousel
          arrows
          prevArrow={<LeftArrow />}
          nextArrow={<RightArrow />}
          easing="ease"
          dots={false}
        >
          {renderImages()}
        </Carousel>
      </div>
      <div>
        <ImageListContainer>{renderImageList()}</ImageListContainer>
      </div>
    </Container>
  );
};

export default ImageModal;

const Image = styled.img`
  height: ${(props: ImageProps) => props.height};
`;

const Container = styled.div`
  width: 90vw;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const LeftArrow = styled(LeftOutlined)`
  font-size: 25px;
  transform: scale(2, 2.5);
  z-index: 5;
  color: white;
  cursor: pointer;
`;

const RightArrow = styled(RightOutlined)`
  font-size: 25px;
  transform: scale(2, 2.5);
  z-index: 5;
  color: white;
  cursor: pointer;
`;

const ImageListContainer = styled.div`
  display: flex;
  width: 100%;
  overflow-x: auto;
  justify-content: flex-start;
`;

const ImageListItem = styled.img`
  width: ${(props: ImageListItemProps) => props.width};
  height: ${(props: ImageListItemProps) => props.height};
  object-fit: cover;
  overflow: hidden;
  margin-right: 1rem;
`;

const calculateDynamicStyles = (screenSize: number): IDynamicStyles => {
  const styles = {
    selectedImageHeight: "50vw",
    imageListItemHeight: "20vw",
    imageListItemWidth: "30vw",
  };
  if (screenSize < 400) {
    styles.selectedImageHeight = "50vw";
    styles.imageListItemHeight = "20vw";
    styles.imageListItemWidth = "30vw";
  } else if (screenSize < 850) {
    styles.selectedImageHeight = "60vw";
    styles.imageListItemHeight = "16vw";
    styles.imageListItemWidth = "25vw";
  } else if (screenSize < 1100) {
    styles.selectedImageHeight = "40vw";
    styles.imageListItemHeight = "12vw";
    styles.imageListItemWidth = "20vw";
  } else if (screenSize < 1450) {
    styles.selectedImageHeight = "40vw";
    styles.imageListItemHeight = "12vw";
    styles.imageListItemWidth = "20vw";
  }
  return styles;
};

type IDynamicStyles = {
  selectedImageHeight: string;
  imageListItemHeight: string;
  imageListItemWidth: string;
};

type ImageProps = {
  height: string;
};

type ImageListItemProps = {
  width: string;
  height: string;
};
