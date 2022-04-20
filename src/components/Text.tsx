import { FC } from "react";
import { Grid } from "@mui/material";
import styled from "styled-components";

type Props = {
	fontSize?: string;
	color?: "#fff" | "#000" | "#333" | "#FF40404" | "#20438C" | "#CE4646" | "#2E982C" | undefined;
	fontWeight?: "400" | "500" | "600" | "700" | "800" | "900" | undefined;
	fontFamily?: "Montserrat" | "Merriweather" | "Mogra" | "Mina" | "Markazi Text" | "Barlow" | undefined;
	margin?: string;
	padding?: string;
	textAlign?: "left" | "right" | "center" | undefined;
	hasHtml?: boolean;
};

const Text: FC<Props & { text: string }> = ({ text, fontSize, color, fontWeight, fontFamily, margin, padding, textAlign, hasHtml }) => {
	if (!hasHtml) {
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
	} else {
		return (
			<HTMLContainer
				fontSize={fontSize}
				color={color}
				fontWeight={fontWeight}
				fontFamily={fontFamily}
				margin={margin}
				padding={padding}
				textAlign={textAlign}
				dangerouslySetInnerHTML={{ __html: text }}
			/>
		);
	}
};

export default Text;

const TextContainer = styled(Grid)`
	font-size: ${(props: Props) => props.fontSize || "20px"};
	color: ${(props: Props) => props.color || "#333"};
	font-weight: ${(props: Props) => props.fontWeight || "400"};
	font-family: ${(props: Props) => props.fontFamily || "Montserrat"};
	margin: ${(props: Props) => props.margin || "0 0 0 0"};
	padding: ${(props: Props) => props.padding || "0 0 0 0"};
	text-align: ${(props: Props) => props.textAlign || "left"};
	width: auto;
`;

const HTMLContainer = styled.div`
	font-size: ${(props: Props) => props.fontSize || "20px"};
	color: ${(props: Props) => props.color || "#333"};
	font-weight: ${(props: Props) => props.fontWeight || "400"};
	font-family: ${(props: Props) => props.fontFamily || "Montserrat"};
	margin: ${(props: Props) => props.margin || "0 0 0 0"};
	padding: ${(props: Props) => props.padding || "0 0 0 0"};
	text-align: ${(props: Props) => props.textAlign || "left"};
	width: auto;
`;
