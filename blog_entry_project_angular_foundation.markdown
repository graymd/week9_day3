Creating a rails project with angular front.

So...it's been a while since I've written a blog entry.  Lots has happened in class!  We've learned: [xxxxxxxxEnter Things We've Learnedxxxxxxxxxx].

This week we have had the opportunity to work with angular on the front end and with the rails server on the backend.  This blog entry goes thru the whole development process including testing with rspec and Foundation for the front end framework.

Let's get started:
This project will be a simple app for tracking items I want to sell on ebay or craigslist.

1. Ensure you have ruby (see rvm) and rails installed on your system.  See: http://installrails.com/

2. create folder for the project (craigslist_item_tracker) and create a .rvmrc file.

  i. Put `rvm 2.2.0@graymd_craigslist_item_tracker --create`. I currently use ruby version 2.2.0 - change for your current installation.

  ii. in terminal run <code>cd .</code> to exit the director and re-enter.

  iii. select yes when the rvmrc notice comes up.

  iv. run <code>gem install rails</code>

  v. run <code>rails new . -d mysql --skip-turbolinks</code><code>-d mysql</code> sets the project database type to mysql (you will need to google how to set this up if you haven't already).  <code>--skip-turbolinks</code> removes turbolinks from the project.
 
3. Use your favorite text editor to open the project.  I use sublime text.

  i. Open the **Gemfile** and insert the following: [*****add image of GEMFILE*****]
  
  Warning: If you are going to use git (not covered here), add `coverage` to `.gitignore` file.  See `https://github.com/colszowka/simplecov`
  	
  ii.Run <code>cd .</code>
  
  iii.Run <code>Bundle Install</code> to install all the added gems.
  
  iv. Run `rails generate rspec:install` to start RSPEC
  
4. Initiate the database by running <code>rake db:create db:migrate</code>
  
  i. We can rails <code>rails s</code> and open the browser to <code>http://localhost:3000/</code> to ensure the project is working.
  
5. First I will set the root path in rails
	
  i. From the prompt run `rails g controller welcome index`.  This will initiate the welcome controller with the index action.  We will set this as our root path ('/').
  
  ii. in `config/routes.rb` change `get 'welcome/index'` to `root 'welcome#index'`.
  
  iii. Run the server.  (see 4.i) [**********add pic of root page**********] 
  
6. Insert the Foundation Framework:

	i. Download the framework from: <code>http://foundation.zurb.com/develop/download.html</code>  I will download the complete version but only use the css.
	
	ii. Copy all files from the downloaded foundation css folder into `/vendor/assets/stylesheets`
	
	iii. open `app/assets/stylesheets/application.css` and add `*= require foundation` above <code>*= require tree .</code>
	
	iv. refresh the root page and see the font change.  Foundation has been set up in the project.
	
7. Create the Model for `item`
	
	i. Run `rails g model item name:string description:text expected_sales_price:string actual_sales_price:string marketplace:string`.  This will create a model with those fields.
	
	ii. Run `rake db:migrate`
	
	iii. In `/app/models/item.rb` add `validates :name, presence: true`.  This will validate a name name must be entered prior to saving the item to the database.
	
	iv. Check the browser.
	
8. Tes the name validation [***********fix this section with below**********]
	
8. Create the Controller with actions

	i. Run `rails g controller items index show new create edit update destroy`
	
	ii. Setup your actions: [*********add image**********]
	
	iii. Open `/config/routes.rb` and set like [*************add image**********]
	
9. Test the controller actions with Rspec

	i. Setup `/spec/rails_helper.rb` with [************add image************]

	i. open `/spec/controllers/item_controllers_spec.rb`
	
	ii. Setup your tests: [***********add image*********]
	
	iii. Run `rspec spec/controllers/item_controllers_spec.rb` [********add image*******]
	
10. Insert angular and underscore framework (again, we won't be using a gem for this!)
	
	i. download the whole angular framework from `http://www.angularjs.org`
	
	ii. copy the following `angular-route.min.js`, `angular-route.min.js.map`, `angular.min.js`, and `angular.min.js.map` to `/vendor/assets/javascripts`
	
	iii. download the underscore framework from `http://underscorejs.org/`.  You will need to use save as save them to the '/vendor/assets/javascripts' folder - make sure the names match the image or change them to match for asset pipeline purposes [***********add image********]
	
	iv. Update `/app/assets/javascripts/application.rb` to match [**********add image*********]
	
	v. Check the browser to ensure no errors
	
11. Create the following folders in `/app/assets/javascripts`: `controllers`, `factories`, `templates`.

12. Create a `welcome.js` file in `/app/assets/javascripts` and [*********add image*******] - will discuss each piece in next blog

13. Create a `controllers.js` file in `/app/assets/javascripts/controllers`

14. Create a `factories.js` file in `/app/assets/javascripts/factories`
	


	
	