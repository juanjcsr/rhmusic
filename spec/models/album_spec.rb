require 'rails_helper'

RSpec.describe Album, type: :model do
  it { should have_many(:tracks).dependent(:destroy) }

  it { should validate_presence_of(:name) }
end
