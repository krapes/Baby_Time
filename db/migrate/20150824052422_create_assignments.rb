class CreateAssignments < ActiveRecord::Migration
  def change
    create_table :assignments do |t|
	t.integer :year_id
	t.integer :month_id
        t.timestamps
    end
	add_index :assignments, :year_id
	add_index :assignments, :month_id
  end
end
