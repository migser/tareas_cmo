({
	doInit : function(component, event, helper) {
        var action = component.get("c.getCasos");
        action.setParams({
        				  "accountId" : component.get("v.recordId")
        				});
        var self = this;
       action.setCallback(self, function(a){
       
            var p = a.getReturnValue()
            
            component.set("v.casos", p);
           console.log("Los casos son: "+component.get("v.casos"));
        });
        
        $A.enqueueAction(action);    
		
	}
})