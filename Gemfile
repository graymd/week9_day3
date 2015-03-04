source 'https://rubygems.org'


# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '4.2.0'
# Use mysql as the database for Active Record
gem 'mysql2'
# Use SCSS for stylesheets
gem 'sass-rails', '~> 5.0'
# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'
# Use CoffeeScript for .coffee assets and views
gem 'coffee-rails', '~> 4.1.0'
# See https://github.com/sstephenson/execjs#readme for more supported runtimes
# gem 'therubyracer', platforms: :ruby
#use haml instead of html
gem 'haml-rails'
#have ability to create fake data
gem 'faker' 
#remove unneeded assets
gem 'quiet_assets'

# Use jquery as the JavaScript library
gem 'jquery-rails'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.0'
# bundle exec rake doc:rails generates the API under doc/api.
gem 'sdoc', '~> 0.4.0', group: :doc

# Use ActiveModel has_secure_password
# gem 'bcrypt', '~> 3.1.7'

# Use Unicorn as the app server
# gem 'unicorn'

# Use Capistrano for deployment
# gem 'capistrano-rails', group: :development

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug'

  #rspec testing framework
  gem 'rspec-rails', '~> 3.0'
  #feature testing
  gem 'capybara'
  #launch applications - used for launching screenshots in capybara
  gem 'launchy'

  #required for non-headless testing
  gem 'selenium-webdriver'
  #needed to use chrome in non-headless testing
  gem 'chromedriver-helper'

  #set up ruby test objects
  gem 'factory_girl_rails'

  #clean out db after running factory girl
  gem 'database_cleaner'

  #shows coverage of testing for project
  gem 'simplecov', :require => false

  #makes tests easier on the fingers and eyes: https://github.com/thoughtbot/shoulda
  gem 'shoulda'

  # Access an IRB console on exception pages or by using <%= console %> in views
  gem 'web-console', '~> 2.0'

  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
end

