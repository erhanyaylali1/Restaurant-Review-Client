import { Grid } from "@mui/material";
import { FC } from "react";
import styled from "styled-components";
import Text from "./Text";

type ButtonContainerProps = {
	hover?: string;
	fontSize?: string;
	color?: "#fff" | "#000" | "#333" | "#FF40404" | "#20438C" | "#CE4646" | "#2E982C" | undefined;
	backgroundColor?: "#fff" | "#333" | "#FF40404" | "#20438C" | "#CE4646" | "#2E982C" | undefined;
	border?: string;
	borderRadius?: string;
	boxShadow?: string;
	fontWeight?: "400" | "500" | "600" | "700" | "800" | "900" | undefined;
	fontFamily?: "Montserrat" | "Merriweather" | "Mogra" | "Mina" | "Markazi Text" | "Barlow" | undefined;
	margin?: string;
	iconMargin?: string;
	padding?: string;
	textAlign?: any;
	width?: string;
	textWidth?: string;
	height?: string;
};

type Props = {
	text: string;
	icon?: any;
	callBack: () => void;
};

const IconButton: FC<ButtonContainerProps & Props> = ({
	hover,
	text,
	icon,
	callBack,
	fontSize,
	color,
	backgroundColor,
	border,
	borderRadius,
	boxShadow,
	fontWeight,
	fontFamily,
	margin,
	iconMargin,
	padding,
	textAlign,
	height,
	width,
}) => {
	return (
		<ButtonContainer
			backgroundColor={backgroundColor}
			margin={margin}
			padding={padding}
			border={border}
			borderRadius={borderRadius}
			boxShadow={boxShadow}
			hover={hover}
			onClick={callBack}
		>
			{icon ? <Icon src={icon} height={height} width={width} iconMargin={iconMargin} /> : null}
			<Text text={text} fontSize={fontSize} fontWeight={fontWeight} fontFamily={fontFamily} color={color} textAlign={textAlign} />
		</ButtonContainer>
	);
};

export default IconButton;

const ButtonContainer = styled(Grid)`
	display: flex;
	align-items: center;
	justify-content: center;
	background-color?: ${(props: ButtonContainerProps) => props.backgroundColor || "#EEE"};
	border?: ${(props: ButtonContainerProps) => props.border || "none"};
	border-radius?: ${(props: ButtonContainerProps) => props.borderRadius || "0"};
	box-shadow?: ${(props: ButtonContainerProps) => props.boxShadow || "none"};
	margin?: ${(props: ButtonContainerProps) => props.iconMargin || "0 0 0 0"};
	padding?: ${(props: ButtonContainerProps) => props.padding || "0 0 0 0"};
	text-align?: ${(props: ButtonContainerProps) => props.textAlign || "left"};
	cursor: pointer;
	&:hover {
		background-color: ${(props: ButtonContainerProps) => props.hover || "#EEE"};
	}
`;

const Icon = styled.img`
	height: ${(props: ButtonContainerProps) => props.height || "20px"};
	width: ${(props: ButtonContainerProps) => props.width || "20px"};
	margin: ${(props: ButtonContainerProps) => props.iconMargin || "0 0 0 0"};
`;
