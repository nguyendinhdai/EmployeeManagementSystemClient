var busy;
function wlCommonInit() {
	busy = new WL.BusyIndicator();
	displayInfo();
}

function reload() {
	// Show busy indicator. Will work regardless of a environment
	busy.show();

	// Set timeout for 5 seconds and reload application using WL API
	setTimeout(WL.Client.reloadApp, 5000);
}

function addEmployee() {
	// Show busy indicator. Will work regardless of a environment
	busy.show();

	var resourceRequest = new WLResourceRequest("/adapters/ems/addEmployee",
			WLResourceRequest.POST);
	resourceRequest.send().then(addEmployeeSuccess, addEmployeeFailure);
}

function addEmployeeSuccess(result) {
	busy.hide();

	if (result.status === 200 && result.responseJSON.status === 'created') {
		WL.SimpleDialog.show("Informations",
				"You have been created an employee", [ {
					text : 'Close',
					handler : function() {
					}
				} ]);
	} else
		loadFeedsFailure();
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