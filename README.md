# OfflineMobileWebApp
A repository for the files in our project offline mobile web app

iTeach 

iTeach is an offline application for the teachers. Calling students one by one for attendance and checking who is late and who is absent consumes more time so we made an application that can help our teachers to easily monitor students. This application is capable of making the set-up of a classroom. The teacher will just enter a classcode and it will automatically saved in the local storage. After doing so, it will lead you to a standard set-up of chairs. Names of the students will be asked to be uploaded for the placing of names on the chairs. The chairs can be clicked by the user and it will light into different colors. These colors specifies the availability of the students. Green means present, Yellow means late and Red means absent. Class standings can also be uploaded for easy access and it can also be updated when they are latest seatworks, quizzes, homeworks and tests. All the data will be will be placed in the local storage and it can be accessed by the application.

# Content Management System (CMS)

It is a software application or set of related programs that are used to create and manage digital content. It is typically used for creating enterprise content management (ECM) and web content management (WCM). Content management is the administration of digital content throughout its lifecycle, from creation to permanent storage or deletion. The content involves some images, video and multimedia as well as text. We have several stages for the content management, the Creation, the Editing, the Publishing, the Oversight (includes updates and version control),and lastly the Removal.  

# What Content Management System did we use?

We used Wordress because it enables us to make a fully functional applications and websites. It is open source and it is flexible enought for us to explore the things about Content Management System.

# ContentManagementSystem 
#Here you will learn on how to install lamp wordpress using ubuntu server in just 10 steps.
  #step1 - Go to the vmware where the ubuntu terminal is open.
  #step2 - Go to the Root Directory by using the code "sudo su -".
  #step3 - After going to the root directory, update the system by typing "sudo apt-get update".
  #step4 - After updating the system, install the LAMP server by typing this code "apt-get install lamp-server^".
  #step5 - After updating the system and installing the lamp-server, go to mysql with this code "mysql -u root -p".
  #step6 - By now, you are in the mysql, the following codes below are the commands you will type according to its arrangement.
		#- CREATE DATABASE wordpressdb; (this is to create the database for the wordpress)
		#- CREATE USER wordpressuser@localhost IDENTIFIED BY 'wordpresspassword'; ()
		#- GRANT ALL PRIVILAGE ON wordpressdb.* TO wordpressuser@localhost; ()
		#-FLUSH PRIVILAGES; ()
		#-exit (to exit mysql and go back to the root directory)
  #step7 - After doing things right, you can now install Wordpress and the following commands below will help you do it. 
		#- go to the directory tmp by using "cd /tmp"
		#- next is get the LATEST VERSION of wordpress by typing "wget http://wordpress.org/latest.zip"
		#- after getting the latest version, unzip the file by "unzip -q latest.zip -d /var/www/html/"
		#- after unzipping the latest version, type the following code accordingly.
			  #chown -R www-data:www-data /var/www/html/wordpress
			  #chmod -R 755 /var/www/html/wordpress
			  #mkdir -p /var/www/html/wordpress/wp-content/uploads
			  #chown -R www-data:www-data /var/www/html/wordpress/wp-content/uploads
  #step8 - After doing all right, restart your ubuntu to finish intalling wordpress by this code "sudo service apache2 restart".
  #step9 - After doing step8, you can now check you ipaddress by typing "ifconfig".
  #step10 - Doing those step right, you can now setup wordpress using your windows browser by this code "http://ipaddress/wordpress".
  
#CMS: In these steps, you will learn how to change the default ipaddress "192.168.x.xy" to your preferred domain name 
(e.g: "http://www.yourpreferredname.com").
#step1 - open your virtualmachine and run your ova file.
#step2 - after opening your ova file, use the code "ifconfig" to see your default ipaddress by looking at the "inet address: "192.168.x.xy"
#step3 - after getting the needed ipaddress, you can now start opening any text editor and run it as administrator. 
#step4 - after opening any text editor, go to drive c: manually or any drive where your system is. 
#step5 - in the driver, look for the folder "Windows", and open it, look for the folder "system32"
#step6 - in the "system32", look for another folder named "drivers" and in that folder the file type named "hosts" where you will change the ipaddress to the domain name. 
#step7 - open the hosts file to the text editor runned as administrator. 
#step8 - in the text editor, you will type the ipaddress below the last line "192.168.x.xy" and type again after that with space "www.domainname.com"
#step9 - save the file and clear your cache and browser history for it to run. 
#step10 - open your website via domain name "www.domainname.com" for the ubuntu server to run, "www.domainname.com/wordpress" for the whole website, "www.domainname.com/wordpress/wp-admin" for the admin.
