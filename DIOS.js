var XLSX = require('xlsx');




var workbook1 = XLSX.readFile('C:/Users/SandipNandi/Project/SingleTouchAutomationAvnet/DIOS/Merchant (1).xlsx');
var worksheet = workbook1.Sheets['QA'];
var FirstRow = worksheet['F2'].v;
var LastRow = worksheet['G2'].v;
var path = require("path");
describe('DIOS', function () {
  it(
    'login ', function () {
      browser.ignoreSynchronization = true;



      browser.get(worksheet['I2'].v);
      browser.sleep(4000);
      browser.manage().window().maximize();
      element(by.xpath("//input[@id='username']")).sendKeys(worksheet['J2'].v);
      element(by.xpath("//input[@id='password']")).sendKeys(worksheet['K2'].v);
      browser.sleep(4000);


      element(by.xpath("//input[@id='kc-login']")).sendKeys(protractor.Key.ENTER);
      browser.sleep(10000);
    })
  for (let i = FirstRow; i <= LastRow; i++) {
    it('validate configure input channels ', function () {
      browser.ignoreSynchronization = true;

      var q = element(by.xpath("//div[contains(text(),'" + worksheet['L' + i].v + "')]"));
      browser.executeScript("arguments[0].scrollIntoView()", q).then(() => {
        q.click();


      });
      /*var program1 = element(by.xpath("//body/app-root[1]/main[1]/div[1]/div[1]/div[1]/div[2]/mat-drawer-container[1]/mat-drawer-content[1]/app-dashboard[1]/div[1]/mat-drawer-container[1]/mat-drawer-content[1]/div[1]/app-program-admin-dashboard[1]/div[1]/app-program-dashboard[1]/mat-sidenav-container[1]/mat-sidenav-content[1]/div[1]/div[1]/div[2]/div[5]/a[1]/mat-card[1]/div[1]"));
        browser.executeScript("arguments[0].click()", program1);*/
      browser.sleep(10000);
      // })

      //it(
      //'switch DIOS ', function () {
      browser.ignoreSynchronization = true;

      var childbutton = element(by.xpath("//span[contains(text(),'Data Planning')]"));
      childbutton.click();


      var winhandles = browser.getAllWindowHandles();

      winhandles.then(function (handles) {
        var parentwindow = handles[0];
        var childwindow = handles[1];

        browser.switchTo().window(childwindow);

        browser.sleep(20000);

        //configure
        var configure = element(by.xpath("//mat-expansion-panel-header[(@aria-controls='cdk-accordion-child-1')]"));
        browser.executeScript("arguments[0].click()", configure);
        browser.sleep(4000);

        var confinputchan = element(by.xpath("//body/app-root[1]/main[1]/div[1]/div[1]/div[1]/div[2]/mat-drawer-container[1]/mat-drawer[1]/div[1]/app-menu[1]/div[1]/mat-expansion-panel[2]/div[1]/div[1]/app-menu[1]/div[1]/mat-nav-list[1]/a[1]/div[1]"));
        browser.executeScript("arguments[0].click()", confinputchan);
        browser.sleep(4000);
       
      });
      
          });
    
    it('validate configure of data package ', function () {
      
        var M = element(by.xpath("//div[contains(text(),'" + worksheet['M' + i].v + "')]"));
        browser.executeScript("arguments[0].click()", M);

        browser.sleep(4000);



        element(by.xpath("//div[contains(text(),'" + worksheet['N' + i].v + "')]")).click();

        browser.sleep(4000);




        element(by.xpath("//div[contains(text(),'" + worksheet['O' + i].v + "')]")).click();
        browser.sleep(15000);


      
    });
    
  
    
    it('validate configure of org unit grids ', function () {
      
        element(by.xpath("//span[contains(text(),'Create Org unit grids')]")).click();
        browser.sleep(5000);



        element(by.xpath("//mat-nav-list[(@aria-label='Edit Org Unit Grids')]")).click();
        browser.sleep(10000);


        var orgunitsave1 = element(by.xpath("//app-edit-org-unit-grids/div[1]/div[1]/div[1]/button/span[contains(text(),'Save')]"));
        browser.executeScript("arguments[0].click()", orgunitsave1);
        browser.sleep(5000);


     
    });
    

  
    it('validate configure of mapping the program grids ', function () {
      
        element(by.xpath("//mat-nav-list[(@aria-label='Map Org Unit Grids')]")).click();
        browser.sleep(10000);

        var maporgsave1 = element(by.xpath("//span[contains(text(),'Save')]"));
        browser.executeScript("arguments[0].click()", maporgsave1);
        browser.sleep(5000);




        element(by.xpath("//mat-nav-list[(@aria-label='Create Program Grids')]")).click()
        browser.sleep(5000);

        element(by.xpath("//button[(@aria-label='Save Input Grids')]")).click();
        browser.sleep(5000);



        element(by.xpath("//mat-nav-list[(@aria-label='Map Program Grids')]")).click();
        browser.sleep(10000);



        var MPGsave1 = element(by.xpath("//span[contains(text(),'Save')]"));
        browser.executeScript("arguments[0].click()", MPGsave1);
        browser.sleep(2000);
     
    });
    

    //monitor
    
    it('validate configure of data loading ', function () {
      
        element(by.xpath("//mat-panel-title[contains(text(),'Monitor')]")).click();
        browser.sleep(4000);

        element(by.xpath("//mat-nav-list[(@aria-label='View Runtime Status')]")).click();
        browser.sleep(5000);



        var selectdpmonitor1 = element(by.xpath("//mat-label[contains(text(),'Select Data Package')]"));
        browser.executeScript("arguments[0].click()", selectdpmonitor1);
        browser.sleep(20000);

        var dpv2 = element(by.xpath("//span[contains(text(),'" + worksheet['P' + i].v + "')]"));
        browser.executeScript("arguments[0].click()", dpv2);
        browser.sleep(2000);



        var toggle2 = element(by.xpath("//app-icon[(@imageicon='toggle-off')]"));
        browser.executeScript("arguments[0].click()", toggle2);
        browser.sleep(2000);
       
            
    });
    

  
    it('validate configure of program grids ', function () {
      


        var orgunitgrids1 = element(by.xpath("//body/app-root[1]/main[1]/div[1]/div[1]/div[1]/div[2]/mat-drawer-container[1]/mat-drawer-content[1]/app-dios-dashboard[1]/div[1]/app-run-fmea[1]/div[1]/mat-drawer-container[1]/mat-drawer[1]/div[1]/div[1]/app-menu[1]/div[1]/mat-expansion-panel[1]/div[1]/div[1]/app-menu[1]/div[1]/mat-nav-list[2]/a[1]"));
        browser.executeScript("arguments[0].click()", orgunitgrids1);
        browser.sleep(2000);

        var recperiod1 = element(by.xpath("//mat-label[contains(text(),'Recording Period')]"));
        browser.executeScript("arguments[0].click()", recperiod1);
        browser.sleep(2000);

        var month = element(by.xpath("//span[contains(text(),'" + worksheet['Q' + i].v + "')]"));
        browser.executeScript("arguments[0].click()", month);
        browser.sleep(2000);


        var IORGM1 = element(by.xpath("//span[contains(text(),'Initiate Org Unit Mapping')]"));
        browser.executeScript("arguments[0].click()", IORGM1);
        browser.sleep(2000);

        var initiate1 = element(by.xpath("//span[contains(text(),'initiate')]"));
        browser.executeScript("arguments[0].click()", initiate1);
        browser.sleep(2000);




        var programgrids1 = element(by.xpath("//mat-nav-list[(@aria-label='Program Grids')]"));
        browser.executeScript("arguments[0].click()", programgrids1);
        browser.sleep(10000);


     

    element(by.xpath("//app-icon[(@size='auto')]")).click();
    browser.sleep(2000);

    var winhandles = browser.getAllWindowHandles();

    winhandles.then(function (handles) {
      var parentwindow = handles[0];
      var childwindow = handles[1];

      browser.switchTo().window(childwindow);

      browser.sleep(10000);

    browser.close();
    browser.sleep(2000);
    browser.switchTo().window(parentwindow);
    browser.sleep(2000);
    element(by.xpath("//mat-icon[contains(text(),'home')]")).click();
    browser.sleep(2000);
 });
});

 

  
  };
  it('DIOS Log Out.', function () {
  
    browser.sleep(10000);
    var avtar = element(by.css("button span[class='mat-button-wrapper'] div img[class='avatar']"));
    browser.executeScript("arguments[0].scrollIntoView();", avtar).then(() => {
      avtar.click();
    });
    element(by.xpath("//button[contains(text(),'Signout')]")).click();
    console.log('**************************** DIOS FINISHED ************************************');
    browser.sleep(8000);
  
  
  }); 
});












