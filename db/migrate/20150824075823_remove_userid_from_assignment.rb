class RemoveUseridFromAssignment < ActiveRecord::Migration
  def change
	remove_column :assignments, :user_id, :integer
	add_column :users, :assignment_id, :integer
  end
end
