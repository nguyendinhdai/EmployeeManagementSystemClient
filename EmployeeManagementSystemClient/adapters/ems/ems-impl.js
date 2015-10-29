function addEmployee(employee_id, employee_name, employee_sex,
		employee_dayofbirth) {
	WL.Logger.info("get params: " + employee_id);

	var content = {};
	content.employee_id = employee_id;
	content.employee_name = employee_name;
	content.employee_sex = employee_sex;
	content.employee_dayofbirth = employee_dayofbirth;
	content.status = 'pending';

	var input = {
		method : "post",
		returnedContentType : "json",
		path : "/employee/add",
		body : {
			contentType : "application/json",
			content : JSON.stringify(content)
		},
		headers : {
			"Accept" : "application/json"
		}
	};

	return WL.Server.invokeHttp(input);
}