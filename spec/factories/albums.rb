FactoryGirl.define do
  factory :album do
    name { Faker::StarWars.planet }
  end
end