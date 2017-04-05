# OfflineMobileWebApp
A repository for the files in our project offline mobile web app

iTeach 

iTeach is an offline application for the teachers. Calling students one by one for attendance and checking who is late and who is absent consumes more time so we made an application that can help our teachers to easily monitor students. This application is capable of making the set-up of a classroom. The teacher will just enter a classcode and it will automatically saved in the local storage. After doing so, it will lead you to a standard set-up of chairs. Names of the students will be asked to be uploaded for the placing of names on the chairs. The chairs can be clicked by the user and it will light into different colors. These colors specifies the availability of the students. Green means present, Yellow means late and Red means absent. Class standings can also be uploaded for easy access and it can also be updated when they are latest seatworks, quizzes, homeworks and tests. All the data will be will be placed in the local storage and it can be accessed by the application.


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
