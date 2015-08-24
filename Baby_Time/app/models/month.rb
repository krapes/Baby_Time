class Month < ActiveRecord::Base
has_many :assignments
has_many :years, through: :assignments
has_many :users, through: :assignments
end
