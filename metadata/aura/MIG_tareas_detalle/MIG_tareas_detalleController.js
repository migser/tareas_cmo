({
	show : function(component, event, helper) {
		var x = component.get("v.abierto");
        if (x) {
            component.set("v.abierto",false);
        } else {
            component.set("v.abierto",true);
        }
	},
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