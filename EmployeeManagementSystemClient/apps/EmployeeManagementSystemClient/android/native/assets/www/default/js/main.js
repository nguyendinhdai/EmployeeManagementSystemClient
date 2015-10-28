
/* JavaScript content from js/main.js in folder common */
var busy;
function wlCommonInit() {
	busy = new WL.BusyIndicator();	
}

function reload() {
	// Show busy indicator. Will work regardless of a environment
	busy.show();

	// Set timeout for 5 seconds and reload application using WL API
	setTimeout(WL.Client.reloadApp, 5000);
}

function clearData() {
	$('#employee_id').val('');
	$('#employee_name').val('');
	$('#employee_sex').val('');
	$('#employee_dayofbirth').val('');
}

function getData() {
	var employee_id = $('#employee_id').val();
	var employee_name = $('#employee_name').val();
	var employee_sex = $('#employee_sex').val();
	var employee_dayofbirth = $('#employee_dayofbirth').val();

	var data = [ employee_id, employee_name, employee_sex, employee_dayofbirth ];
	return data;
}

function addEmployee() {
	// Show busy indicator. Will work regardless of a environment
	busy.show();

	var data = getData();
	var params = {
		'params' : JSON.stringify(data)
	};

	var resourceRequest = new WLResourceRequest("/adapters/ems/addEmployee",
			WLResourceRequest.POST);
	resourceRequest.sendFormParameters(params).then(addEmployeeSuccess,
			addEmployeeFailure);
}

function addEmployeeSuccess(result) {
	busy.hide();

	if (result.status === 200 && result.responseJSON.status === 'created') {
		WL.SimpleDialog.show("Informations",
				"You have been created an employee", [ {
					text : 'Close',
					handler : function() {
						clearData();
					}
				} ]);
	} else
		addEmployeeFailure(result);
}

function addEmployeeFailure(result) {
	busy.hide();

	WL.SimpleDialog.show("Informations",
			"Have an error occour when create an employee", [ {
				text : 'Close',
				handler : function() {
				}
			} ]);
}
/* JavaScript content from js/main.js in folder android */
// This method is invoked after loading the main HTML and successful initialization of the IBM MobileFirst Platform runtime.
function wlEnvInit(){
    wlCommonInit();
    // Environment initialization code goes here
}