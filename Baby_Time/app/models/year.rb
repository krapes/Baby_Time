class Year < ActiveRecord::Base
has_many :assignments
has_many :months, through: :assignments
has_many :users, through: :assignments
end
