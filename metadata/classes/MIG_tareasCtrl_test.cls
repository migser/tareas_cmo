@isTest
public class MIG_tareasCtrl_test {
	@isTest static void getCasosTest() {
        Account a = new Account(Name='test');
        insert a;
        Case c1 = new Case(Accountid=a.id);
        insert c1;
        Case c2 = new Case(Accountid=a.id);
        insert c2;
        List<Case> casos = MIG_tareasCtrl.getCasos(a.id);
        System.assertEquals(2,casos.size());
    }
}