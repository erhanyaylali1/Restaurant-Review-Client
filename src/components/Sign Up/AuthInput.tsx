import { Grid } from "@mui/material";
import { FC } from "react";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import Text from "../Text";

type ButtonContainerProps = {};

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
};

const AuthInput: FC<ButtonContainerProps & Props> = ({ label, placeholder, name, type, onChange, handleBlur, value, error, isTouched }) => {
	const borderColor = isTouched ? (error ? "#CE4646" : "#2E982C") : value ? "#20438C" : "#333";
	return (
		<InputContainer borderColor={borderColor}>
			<TextField
				autoComplete="nope"
				label={label}
				placeholder={placeholder}
				type={type}
				name={name}
				value={value}
				onChange={onChange}
				onBlur={handleBlur}
				InputLabelProps={{
					shrink: true,
					style: { fontFamily: "Barlow", fontSize: "18px", fontWeight: "700" },
				}}
			/>
			{isTouched && error && <Text text={error} fontFamily="Barlow" fontSize="13px" fontWeight="400" color="#CE4646" />}
		</InputContainer>
	);
};

export default AuthInput;

const InputContainer = styled(Grid)`
	margin-bottom: 25px;
	width: 90%;
	margin-inline: auto;
	display: flex;
	flex-direction: column !important;
	justify-content: center;
	& div {
		border-radius: 50px !important;
		padding-inline: 10px !important;
	}
	& label {
		margin-left: 25px;
		color: ${(props: InputContainerProps) => props.borderColor + " !important" || "none"};
	}
	& legend {
		margin-left: 15px;
		padding-right: 5px;
	}
	& fieldset {
		border-color: ${(props: InputContainerProps) => props.borderColor + " !important" || "none"};
		border-width: 2px;
	}
`;

interface InputContainerProps {
	borderColor?: string;
}
