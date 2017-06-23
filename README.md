[![Build Status](https://travis-ci.org/juanjcsr/rhmusic.svg?branch=master)](https://travis-ci.org/juanjcsr/rhmusic)
# RH Music app

## How to use?

You can add Albums to your music library by typing your album name in the text box **album name**:

![Imgur](http://i.imgur.com/MGFKJTJ.png)

Then, to add tracks to the album you can either click on the album name or click in the link `Album link`

![Imgur](http://i.imgur.com/5K17E6t.png)

Clicking on either of those links will open Album's track list where you can find the **add a new track** form:

![Imgur](http://i.imgur.com/Su0yj0X.png)

You can delete a single track from an album by clicking the "delete track" button (**the x to the right to the track name**).

Also you can delete an album and all of its tracks by clicking the x button next to the album's name

![Imgur](http://i.imgur.com/RbgHkHa.png?1)

## Dependencies

**RH Music** uses Rails 5 as an API backend and Angular 2 as the frontend inside in the Rails environment. It also uses sqlite3 as the
database in dev mode and postgres in production mode.

Angular 2 frontend is build on top of [Yarn](https://yarnpkg.com/en/) as dependency manager but it can also be built and run with node's `npm`.


## How to build in development mode?

To start the environment just clone the repo with:

```
git clone https://github.com/juanjcsr/rhmusic
```

install the dependencies, create and migrate the database:
```
bundle install
rake db:create db:migrate
```

start the backend API with:

```
rails server
```
And the API will be served on port `:3000`

The Angular 2 application lives inside the `ng2rhmusic` directory. In development mode it uses `ng`'s server. To install you just need to run 

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

In order to build, just type the following commands:

```
    rake assets:clobber
    (cd ng2rhmusic; yarn build)
    RAILS_ENV=production rake assets:precompile
```
