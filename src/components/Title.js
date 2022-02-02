import React, { useState } from "react";
import { DatePicker, TimePicker } from "@material-ui/pickers"

const Title = () => {

    const [selectedDate, setSelectedDate] = useState( new Date() );

    return (

        <div>
            <label>Fecha :</label>
            <DatePicker value={ selectedDate } onChange={ setSelectedDate } />

            <TimePicker value={ selectedDate } onChange={ setSelectedDate } />
        </div>
    )
}

export default Title