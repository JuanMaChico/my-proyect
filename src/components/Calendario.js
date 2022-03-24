import React, { useState } from "react";
import { ThemeProvider } from "@material-ui/styles";
import { KeyboardDatePicker } from "@material-ui/pickers";
import { Calendario, materialTheme } from "./Calendario.styles";

function CssThemeExample() {
	const [selectedDate, handleDateChange] = useState(new Date());

	return (
		<ThemeProvider theme={materialTheme}>

			<KeyboardDatePicker
				disableToolbar
				label="Light blue picker"
				value={selectedDate}
				onChange={handleDateChange}
				disablePast={false}
				disableFuture={true}
				variant="inline"
			/>

		</ThemeProvider>
	);
}

export default CssThemeExample;
