({
	navega : function(component, event, helper) {
    	var recordId = event.target.id;
        console.log("EL ID ES:");
    	var recordId = event.target.id;
    	console.log(recordId);
    	var navEvt = $A.get("e.force:navigateToSObject");
	    navEvt.setParams({
	      "recordId": recordId
	    });
	    navEvt.fire();
	}
})