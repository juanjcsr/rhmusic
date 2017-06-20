class Album < ApplicationRecord
  has_many :tracks, dependent: :destroy

  validates_presence_of :name
end
