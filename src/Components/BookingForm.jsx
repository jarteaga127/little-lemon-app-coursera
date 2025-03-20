const BookingForm = () => {
    return ( 
    <>
    <form action="" className="booking-form">
        <label htmlFor="booking-date">Choose date:</label>
        <input type="date" id="booking-date" className="form-control"/>
        <label htmlFor="booking-time">Select time</label>
        <select name="booking-time" id="booking-time" className="form-control">
            <option value="">17:00</option>
            <option value="">18:00</option>
            <option value="">19:00</option>
            <option value="">20:00</option>
            <option value="">21:00</option>
            <option value="">22:00</option>
        </select>
        <label htmlFor="booking-guests">Number of guests</label>
        <input type="number" placeholder="1" min="1" max="10" id="booking-guests" className="form-control"/>
        <label htmlFor="occastion">Occasion</label>
        <select name="occastion" id="occassion" className="form-control">
        <option value="">Birthday</option>
        <option value="">Anniversary</option>
        <option value="">Graduation</option>
        <option value="">First A</option>
        </select>
        <input type="submit" value="Book your table" className="booking-submit"/>
    </form>
    </> 
);
}
 
export default BookingForm;