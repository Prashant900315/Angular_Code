Steps for creating jar file for backend server:
Use STS ide for import project(Config,discovery,auth,)

For creation jar files we need to build and then up Discovery and config server and then we would be albe to build further jars.
 
1. start discovery server
a) step 1 - maven clean
b) Step 2- maven update
c) step 3 - maven install

2. start config server
      For database connections: /aavas_backend_uat/admin/config-server/app-config/application.properties

Application properties files contains DB credentials. 
a) step 1 - maven clean
b) Step 2- maven update
c) step 3 - maven install

3. start auth server
a) step 1 - maven clean
b) Step 2- maven update
c) step 3 - maven install

4. start gateway server
a) step 1 - maven clean
b) Step 2- maven update
c) step 3 - maven install
d) 

5. Start process of build jar file of MS-Models
a) step 1 - maven clean
b) Step 2- maven update
c) step 3 - maven install
d) jar Path: business/omnifin-cam-automation/target

6. Start process of build jar file of cam-automation
a) step 1 - Run As > maven clean
b) Step 2- Maven > update project
c) step 3 - Run As > maven install
d) jar Path: business/omnifin-cam-automation/target




 Steps for creating war file  for frontend server(Angular): 

 1.  ng build --prod --base-href ./ 

 2.  cd dist

 3.  cd omnifinLOSUtilities     

 4.  jar -cvf omnifinLOSUtilities.war * 

jar -cvf OmniFinDigitalLOS.war *
jar -cvf omnifinLOSUtilities.war *


