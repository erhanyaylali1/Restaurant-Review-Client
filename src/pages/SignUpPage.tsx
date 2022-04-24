import React from "react";
import styled from "styled-components";
import { Grid } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { getIsLogged } from "../features/UserSlice";
import { getScreenSize } from "../features/GeneralSlice";
import BannerFirstImage from "../assets/FirstBannerImage.jpg";
import BannerImage from "../components/Sign Up/BannerImage";
import Text from "../components/Text";
import IconButton from "../components/IconButton";
import GoogleIcon from "../assets/GoogleIcon.svg";
import FacebookIcon from "../assets/FacebookIcon.svg";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
	const { t } = useTranslation();
	const navigate = useNavigate();
	const is_user_logged_in: boolean = useSelector(getIsLogged);
	const screenSize: number = useSelector(getScreenSize);

	if (is_user_logged_in) navigate("/profile");

	const redirect_to_the_create_account = () => navigate("/sign-up-create");
	const sign_up_with_google = () => {};
	const measuremenets: IMeasurements = calculateDynamicMeasurements(screenSize);

	return (
		<Container flexDirection={measuremenets.flexDirection} alignItems={measuremenets.alignItems} justifyContent={measuremenets.justifyContent}>
			<ContainerChild margin={measuremenets.containerMargin}>
				<Grid>
					<BannerImage
						text={t<string>("sign_up.image_text")}
						image={BannerFirstImage}
						height={measuremenets.image_height}
						fontSize={measuremenets.image_text_font_size}
					/>
				</Grid>
			</ContainerChild>
			<ContainerChild>
				<Grid>
					<Text
						color="#000"
						textAlign="center"
						text={t<string>("sign_up.welcome_title")}
						fontSize="35px"
						fontFamily="Markazi Text"
						margin="20px 0 0px 0"
					/>
					<Text color="#000" textAlign="center" text={t<string>("sign_up.welcome_text")} fontSize="22px" fontFamily="Markazi Text" />
				</Grid>
				<ButtonContainer width={measuremenets.button_container_width} margin={measuremenets.button_container_margin}>
					<IconButton
						hover="#EEE"
						height="30px"
						width="30px"
						iconMargin="0 15px 0 0"
						padding="10px 0"
						borderRadius="3px"
						boxShadow="0px 2px 4px 0px rgba(0,0,0,0.25)"
						text={t<string>("sign_up.sign_up_with_google")}
						callBack={sign_up_with_google}
						icon={GoogleIcon}
						fontFamily="Markazi Text"
						fontSize="22px"
					/>
					<IconButton
						hover="#EEE"
						height="30px"
						width="30px"
						iconMargin="0 15px 0 0"
						padding="10px 0"
						borderRadius="3px"
						margin="20px 0 20px 0"
						boxShadow="0px 2px 4px 0px rgba(0,0,0,0.25)"
						text={t<string>("sign_up.sign_up_with_facebook")}
						callBack={sign_up_with_google}
						icon={FacebookIcon}
						fontFamily="Markazi Text"
						fontSize="22px"
					/>
					<IconButton
						hover="#EEE"
						height="30px"
						width="30px"
						iconMargin="0 15px 0 0"
						padding="10px 0"
						borderRadius="3px"
						boxShadow="0px 2px 4px 0px rgba(0,0,0,0.25)"
						text={t<string>("sign_up.sign_up")}
						callBack={redirect_to_the_create_account}
						fontFamily="Markazi Text"
						fontSize="22px"
					/>
					<Grid>
						<IconButton
							margin="25px 0 0 0"
							borderRadius="3px"
							padding="5px 0"
							text={t<string>("sign_up.sign_in")}
							fontFamily="Markazi Text"
							fontSize="22px"
							color="#20438C"
							textAlign="center"
							callBack={sign_up_with_google}
						/>
					</Grid>
				</ButtonContainer>
			</ContainerChild>
		</Container>
	);
};

export default SignUpPage;

// STYLED COMPONENTS

const Container = styled(Grid)`
	flex-direction: ${(props: IContainerProps) => props.flexDirection || "column"};
    align-items= ${(props: IContainerProps) => props.alignItems || "flex-start"};
    justify-content= ${(props: IContainerProps) => props.justifyContent || "flex-start"};
	display: flex;
	margin-inline: auto;
	padding: 40px 30px;
`;
const ContainerChild = styled(Grid)`
	margin: ${(props: IContainerChildProps) => props.margin || "0 0 0 0"};
`;
const ButtonContainer = styled(Grid)`
	width: ${(props: IButtonProps) => props.width || "auto"};
	margin: ${(props: IButtonProps) => props.margin || "0 0 0 0"};
`;

// interface
interface IMeasurements {
	image_height?: string;
	image_text_font_size?: string;
	image_container_margin?: string;
	button_container_width?: string;
	button_container_margin?: string;
	flexDirection: "row" | "column";
	alignItems: string;
	justifyContent: string;
	containerMargin: string;
}
interface IContainerProps {
	flexDirection?: string;
	alignItems?: string;
	justifyContent?: string;
}
interface IContainerChildProps {
	margin?: string;
}
interface IButtonProps {
	width?: string;
	margin?: string;
}

// UTILS

const calculateDynamicMeasurements = (screenSize: number): IMeasurements => {
	const measuremenets: IMeasurements = {
		image_height: "0px",
		image_text_font_size: "0px",
		image_container_margin: "0 0 0 0",
		button_container_width: "0px",
		button_container_margin: "0px",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		containerMargin: "0 0 0 0",
	};
	if (screenSize < 400) {
		measuremenets.image_height = "300px";
		measuremenets.image_text_font_size = "40px";
		measuremenets.button_container_width = "100%";
		measuremenets.button_container_margin = "40px 0 0 0";
	} else if (screenSize < 650) {
		measuremenets.image_height = "350px";
		measuremenets.image_text_font_size = "40px";
		measuremenets.button_container_width = "70%";
		measuremenets.button_container_margin = "50px auto 0 auto";
	} else if (screenSize < 850) {
		measuremenets.image_height = "450px";
		measuremenets.image_text_font_size = "40px";
		measuremenets.button_container_width = "80%";
		measuremenets.button_container_margin = "80px auto 0 auto";
	} else if (screenSize < 1100) {
		measuremenets.image_height = "400px";
		measuremenets.image_text_font_size = "40px";
		measuremenets.button_container_width = "90%";
		measuremenets.button_container_margin = "30px auto 0 auto";
		measuremenets.flexDirection = "row";
	} else if (screenSize < 1450) {
		measuremenets.image_height = "450px";
		measuremenets.image_text_font_size = "40px";
		measuremenets.button_container_width = "90%";
		measuremenets.button_container_margin = "30px auto 0 auto";
		measuremenets.flexDirection = "row";
		measuremenets.containerMargin = "60px 50px 0 -100px";
	} else {
		measuremenets.image_height = "550px";
		measuremenets.image_text_font_size = "45px";
		measuremenets.button_container_width = "90%";
		measuremenets.button_container_margin = "30px auto 0 auto";
		measuremenets.flexDirection = "row";
		measuremenets.containerMargin = "100px 100px 0 -150px";
	}
	return measuremenets;
};
