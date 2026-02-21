class Character < ApplicationRecord
    belongs_to :game
    
    validates :name, presence: true
    validates :actor_type, inclusion: { in: %w[pc npc] }
end