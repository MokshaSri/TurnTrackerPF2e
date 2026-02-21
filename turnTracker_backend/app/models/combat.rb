class Combat < ApplicationRecord 
    has_one :game
    has_many :turns
end
