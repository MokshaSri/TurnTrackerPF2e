class Combatant < ApplicationRecord
    belongs_to :combat
    belongs_to :character, optional: true

    default_scope { order(:order_index, :id) }

end