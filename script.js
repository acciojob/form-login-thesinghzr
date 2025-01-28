function getFormvalue() {
    //Write your code here
	const form = document.getElementById("form1");
	const first= form.elements["first_name"].value;
	const last=form.elements["last_name"].value;
	alert(`${first} ${last}`);

}