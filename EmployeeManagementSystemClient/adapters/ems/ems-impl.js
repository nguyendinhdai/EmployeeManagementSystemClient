function addEmployee() {
	var input = {
		method : 'post',
		returnedContentType : 'json',
		path : '/employee/add',
		body : {
			contentType : 'application/json',
			content : '{ "employee_id" : "009000000", "full_name" : "VAI CUT", "age" : 30 }'
		}
	};

	return WL.Server.invokeHttp(input);
}