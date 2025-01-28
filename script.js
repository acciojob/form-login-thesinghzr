function getFormvalue() {
    //Write your code here
	const form = document.getElementById("form1");
	const first= form.elements["fname"].value;
	const last=form.elements["lname"].value;
	alert(`${first} ${last}`);

}