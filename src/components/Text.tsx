import { FC } from "react";
import { Grid } from "@mui/material";
import styled from "styled-components";

type Props = {
	fontSize?: string;
	color?: string;
	fontWeight?: string;
	fontFamily?: string;
	margin?: string;
	padding?: string;
	textAlign?: any;
};

const Text: FC<Props & { text: string }> = ({ text, fontSize, color, fontWeight, fontFamily, margin, padding, textAlign }) => {
	return (
		<TextContainer
			fontSize={fontSize}
			color={color}
			fontWeight={fontWeight}
			fontFamily={fontFamily}
			margin={margin}
			padding={padding}
			textAlign={textAlign}
		>
			{text}
		</TextContainer>
	);
};

export default Text;

const TextContainer = styled(Grid)`
	fontsize: ${(props: Props) => props.fontSize || "20px"};
	color?: ${(props: Props) => props.color || "#333"};
	fontweight?: ${(props: Props) => props.fontWeight || "400"};
	fontfamily?: ${(props: Props) => props.fontFamily || "Montserrat"};
	margin?: ${(props: Props) => props.margin || "0 0 0 0"};
	padding?: ${(props: Props) => props.padding || "0 0 0 0"};
	text-align?: ${(props: Props) => props.textAlign || "left"};
	width: auto;
`;
