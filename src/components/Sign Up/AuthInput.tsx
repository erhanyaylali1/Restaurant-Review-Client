import { Grid } from "@mui/material";
import { FC, useState } from "react";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import Text from "../Text";
import HideIcon from "../../assets/hide.svg";
import ShowIcon from "../../assets/show.svg";
import ErrorIcon from "../../assets/error.svg";
import CorrectIcon from "../../assets/correct.svg";

type Props = {
	label: string;
	placeholder: string;
	name: string;
	type: string;
	onChange: any;
	handleBlur: any;
	value: string;
	error: string | undefined;
	isTouched: boolean | undefined;
	size?: "small" | "medium";
};

const AuthInput: FC<Props> = ({ label, placeholder, name, type, onChange, handleBlur, value, error, isTouched, size }) => {
	const [showPassword, setShowPassword] = useState(false);

	const borderColor = isTouched ? (error ? "#CE4646" : "#2E982C") : "#333";

	const handleShowPasswordIconClick = () => setShowPassword(!showPassword);

	const renderInputIcon = () => {
		if (isTouched) {
			if (type === "password") {
				if (showPassword) return <InputIcon src={HideIcon} cursor="pointer" onClick={handleShowPasswordIconClick} />;
				else return <InputIcon src={ShowIcon} cursor="pointer" onClick={handleShowPasswordIconClick} />;
			} else {
				if (error) return <InputIcon src={ErrorIcon} />;
				else return <InputIcon src={CorrectIcon} />;
			}
		}
	};

	const findType = () => {
		if (type !== "password") return type;
		else return showPassword ? "text" : "password";
	};

	return (
		<Container borderColor={borderColor}>
			<InputContainer>
				<TextField
					autoComplete="nope"
					size={size || "small"}
					label={label}
					placeholder={placeholder}
					fullWidth
					type={findType()}
					name={name}
					value={value}
					onChange={onChange}
					onBlur={handleBlur}
					InputLabelProps={{
						shrink: true,
						style: { fontFamily: "Barlow", fontSize: "18px", fontWeight: "700" },
					}}
				/>
				{renderInputIcon()}
			</InputContainer>
			{isTouched && error && <Text text={error} fontFamily="Barlow" fontSize="13px" fontWeight="400" color="#CE4646" margin="0 0 0 5px" />}
		</Container>
	);
};

export default AuthInput;

const Container = styled(Grid)`
	position: relative;
	margin-bottom: 25px;
	display: flex;
	flex-direction: column !important;
	justify-content: center;
	width: 90%;
	margin-inline: auto;
	& div {
		border-radius: 3px !important;
		padding: 2px 0px !important;
	}
	& label {
		margin-left: 10px;
		color: ${(props: ContainerProps) => props.borderColor + " !important" || "none"};
	}
	& legend {
		margin-left: 0px;
		padding-right: 10px;
	}
	& fieldset {
		border-color: ${(props: ContainerProps) => props.borderColor + " !important" || "none"};
		border-width: 2px;
	}
	& input {
		padding-right: 30px;
	}
`;
const InputContainer = styled(Grid)`
	position: relative;
`;

const InputIcon = styled.img`
	position: absolute;
	right: 25px;
	top: 50%;
	transform: translate(0, -50%);
	width: 15px;
	height: 15px;
	cursor: ${(props: InputIconProps) => props.cursor + " !important" || "initial"};
`;

interface ContainerProps {
	borderColor?: string;
}

interface InputIconProps {
	cursor?: string;
}
