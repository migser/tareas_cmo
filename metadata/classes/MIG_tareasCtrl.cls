public class MIG_tareasCtrl {
	 @AuraEnabled
    public static List<Case> getCasos(Id accountId) {
        return [select casenumber, Status, subject,id ,lastmodifieddate,(select ActivityDate , Priority , id, subject ,
                                                        		Description,OwnerId, owner.name,  type ,
                                                        		 WhoId,who.name,createdby.SmallBannerPhotoUrl
                                                        from case.tasks
                                                        order by ActivityDate
                                                       )
                from case 
                where accountid = :accountId
               order by lastmodifieddate desc];
    }
}