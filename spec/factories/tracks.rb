FactoryGirl.define do
  factory :track do
    name { Faker::StarWars.quote }
    album_id nil
  end
end