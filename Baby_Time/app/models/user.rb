class User < ActiveRecord::Base
belongs_to :assignment
has_one :month, through: :assignment
has_one :year, through: :assignment
end
