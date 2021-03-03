Make a New folder and rename it to the app. <br>
Then put the project in the app folder under public_html of the server.<br>
Move .htaccess to the in the public_html. <br>
Make ensure your database information in the .env file and follow below.<br>

Please  Open the terminal of Cpanel. <br>

cd public_html/app <br>
composer install<br>
php artisan migrate:fresh --seed<br>
php artisan optmize<br>

Then visit your site.
