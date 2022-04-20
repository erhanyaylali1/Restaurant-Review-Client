import { FC } from "react";
import { Grid } from "@mui/material";
import styled from "styled-components";

interface Props {
	height?: string;
	text?: string;
	image: any;
	fontSize?: string;
}

const BannerImage: FC<Props> = ({ height, text, image, fontSize }) => {
	return (
		<ImageContainer height={height}>
			{text && <ImageText fontSize={fontSize}>{text}</ImageText>}
			<ImageContainerImage alt="Review Restourants Image" src={image} />
		</ImageContainer>
	);
};

export default BannerImage;

const ImageContainer = styled(Grid)`
	height: ${(props: ImageContainerProps) => props.height || "0px"};
	position: relative;
	border-radius: 3px;
	overflow: hidden;
	z-index: -1;
	background-color: #33333350;
`;
const ImageContainerImage = styled.img`
	height: 100%;
	width: 100%;
	object-fit: cover;
	opacity: 0.7;
	z-index: -1;
`;
const ImageText = styled(Grid)`
	font-size: ${(props: ImageTextProps) => props.fontSize || "20px"};
	position: absolute;
	left: 8%;
	bottom: 6%;
	color: #fff;
	font-family: Merriweather;
	font-weight: bold;
	z-index: 2;
	width: min-content;
`;

// INTERFACES

interface ImageContainerProps {
	height?: string;
}
interface ImageTextProps {
	fontSize?: string;
}
