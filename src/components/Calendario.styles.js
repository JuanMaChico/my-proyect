/**
 * @desc Dependencias
 */
import styled from "styled-components";
import { DateTimePicker } from "@material-ui/pickers";
import lightBlue from "@material-ui/core/colors/lightBlue";
import { createMuiTheme } from "@material-ui/core";

export const materialTheme = createMuiTheme({
	overrides: {
		MuiPickersCalendarHeader: {
			switchHeader: {
				// backgroundColor: lightBlue.A200,
				color: "#000000",
			},
		},
		MuiPickersDay: {
			day: {
				color: "#504e4e89",
			},
			daySelected: {
				backgroundColor: "#32384B",
			},
			dayDisabled: {
				color: "#504e4e89",
			},
			current: {
                color: "#ff0000",
			},
		},
		MuiPickersModal: {
            dialogAction: {
                color: lightBlue["400"],
			},
		},
	},
});
