class Game < ApplicationRecord
    has_one :user
    has_many :combats
end
