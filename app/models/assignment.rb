class Assignment < ActiveRecord::Base
belongs_to :year
belongs_to :month
has_many :users
end
