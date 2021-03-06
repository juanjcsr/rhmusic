require 'rails_helper'

RSpec.describe Track, type: :model do
  it { should belong_to(:album) }
  it { should validate_presence_of(:name) }
end
