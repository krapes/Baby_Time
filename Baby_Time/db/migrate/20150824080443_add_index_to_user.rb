class AddIndexToUser < ActiveRecord::Migration
  def change
	add_index :users, :assignment_id
  end
end
