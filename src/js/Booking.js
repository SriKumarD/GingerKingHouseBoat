function getBookings() {
	var url = "./booking.json";
	const xhr=new XMLHttpRequest()
	xhr.open('GET',url)
	xhr.onload=() =>
	{
		let obj=JSON.parse(xhr.responseText)
		let location=document.getElementById("location").value
		let date=document.getElementById("dor").value
		if(validateDate(date,new Date()))
		{
			if(obj[location].includes(date))
			{
				document.getElementById("dateError").innerHTML="Houseful!! Booking is not available on this date"
			}
			else
			{
				document.getElementById("dateError").innerHTML="";
				document.getElementById("btn").disabled=false;
			}
		}
		else{
			document.getElementById("dateError").innerHTML="Ride Date should be greater than today";
		}

	}
	xhr.send()
	// Ajax Call : on selecting the location and date of booking make an ajax call
	// Check if the date is a valid date (call the validate date method) - Populate error message if the user has entered a past date
	// Check if there is any availability in the selected location on the date of booking
	// Populate error message if there is no availability in the location on the selected date
}


/* Debug the below code to display the appropriate booking/success message */
function book(e) {

	// Charges for one person for one day is 100$
	// If the Number of people is less than 5 no discount is offered
	// If the number of people is more than 5 and less than 15 then a discount of 5% is offered
	// If the number of people is more than 14 and less than 21 a discount of 10% should be offered

	var nop = document.forms[0].nop.value;
	var cost = (nop * 100);
	var cost1 = (nop * 100 - ((nop * 100)) * (5/100));
	var cost2 = (nop * 100 - ((nop * 100)) * (10/100));

	if (nop > 5 && nop <= 15) {
		document.getElementById("successMessage").innerHTML = "Successful booking.Total amount to be paid is: $" + cost1;
	} else if (nop >= 14 && nop <= 21) {
		document.getElementById("successMessage").innerHTML = "Successful booking.Total amount to be paid is: $" + cost2;
	} else {
		document.getElementById("successMessage").innerHTML = "Successful booking.Total amount to be paid is: $" + cost;
	}
	sessionStorage.clear()
	e.preventDefault()

}



function validateDate(bookingDate, todayDate) {
	// write the code to return true if bookingDate is after todayDate and false if bookingDate is a past date
	if(new Date(bookingDate).getTime()> todayDate.getTime())
	{
		return true;
	}
	else
	{
		return false;
	}
}







