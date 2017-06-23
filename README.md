[![Build Status](https://travis-ci.org/juanjcsr/rhmusic.svg?branch=master)](https://travis-ci.org/juanjcsr/rhmusic)
# RH Music app

## Dependencies

RH Music uses Rails 5 and Angular 2 who lives in the Rails environment. IT also uses sqlite3 as the
database in dev mode. 

Angular 2 frontend is build on top of [Yarn](https://yarnpkg.com/en/) as dependency manager but it can also be built and run with node's `npm`.


## How to build in development mode?

To start the environment just clon the repo with:

```
git clone https://github.com/juanjcsr/rhmusic
```

install the dependencies and create and migrate the database:
```
bundle install
rake db:create db:migrate
```

and start the backend API with:

```
rails s
```
And the API will be served on port `:3000`

The Angular 2 application lives inside the `ng2rhmusic` directory. In development mode it uses `ng` server. To install you just need to run 

```
    yarn 
    yarn start
```

and it will start on port `:4200`

## Testing

RHMusic ships with tests for both the backend API and the frontend webapp. 


### Ruby
To test the Ruby Backend just run:
```
    bundle exec rspec
```

If you want to run it in watch mode, run instead:

```
    bundle exec guard
```
### Angular
To test the Angular 2 app, run:
```
    yarn test
```

## Building for production

**RHMusic** uses `postgres` as production database. 

In order to build, just type the following commands:

```
    rake assets:clobber
    (cd ng2rhmusic; yarn build)
    RAILS_ENV=production rake assets:precompile
```
