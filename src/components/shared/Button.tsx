import { FC } from "react";
import styled from "styled-components";
import Text from "./Text";

type ButtonContainerProps = {
  hover?: string;
  fontSize?: string;
  color?:
    | "#fff"
    | "#000"
    | "#333"
    | "#FF40404"
    | "#20438C"
    | "#CE4646"
    | "#2E982C"
    | undefined;
  backgroundColor?:
    | "#fff"
    | "#333"
    | "#FF40404"
    | "#20438C"
    | "#CE4646"
    | "#2E982C"
    | undefined;
  border?: string;
  borderRadius?: string;
  boxShadow?: string;
  fontWeight?: "400" | "500" | "600" | "700" | "800" | "900" | undefined;
  fontFamily?:
    | "Montserrat"
    | "Merriweather"
    | "Mogra"
    | "Mina"
    | "Markazi Text"
    | "Barlow"
    | undefined;
  margin?: string;
  iconMargin?: string;
  padding?: string;
  textAlign?: any;
  width?: string;
  textWidth?: string;
  height?: string;
  maxWidth?: string;
};

type Props = {
  text: string;
  type?: "button" | "submit" | "reset" | undefined;
  callBack?: () => void;
};

const Button: FC<ButtonContainerProps & Props> = ({
  hover,
  text,
  type,
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
  padding,
  textAlign,
  width,
  maxWidth,
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
      width={width}
      maxWidth={maxWidth}
      onClick={callBack}
      type={type}
    >
      <Text
        text={text}
        fontSize={fontSize}
        fontWeight={fontWeight}
        fontFamily={fontFamily}
        color={color}
        textAlign={textAlign}
      />
    </ButtonContainer>
  );
};

export default Button;

const ButtonContainer = styled.button`
  background-color: ${(props: ButtonContainerProps) =>
    props.backgroundColor || "#EEE"};
  border: ${(props: ButtonContainerProps) => props.border || "none"};
  border-radius: ${(props: ButtonContainerProps) => props.borderRadius || "0"};
  box-shadow: ${(props: ButtonContainerProps) => props.boxShadow || "none"};
  margin: ${(props: ButtonContainerProps) => props.margin || "0 0 0 0"};
  padding: ${(props: ButtonContainerProps) => props.padding || "0 0 0 0"};
  text-align: ${(props: ButtonContainerProps) => props.textAlign || "left"};
  width: ${(props: ButtonContainerProps) => props.width || "20px"};
  max-width: ${(props: ButtonContainerProps) => props.maxWidth || "auto"};
  cursor: pointer;
  &:hover {
    background-color: ${(props: ButtonContainerProps) => props.hover || "#EEE"};
  }
`;
