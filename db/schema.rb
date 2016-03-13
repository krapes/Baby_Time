# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150824080443) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "assignments", force: true do |t|
    t.integer  "year_id"
    t.integer  "month_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "assignments", ["month_id"], name: "index_assignments_on_month_id", using: :btree
  add_index "assignments", ["year_id"], name: "index_assignments_on_year_id", using: :btree

  create_table "months", force: true do |t|
    t.string   "nam"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "users", force: true do |t|
    t.string   "name"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "assignment_id"
  end

  add_index "users", ["assignment_id"], name: "index_users_on_assignment_id", using: :btree

  create_table "years", force: true do |t|
    t.string   "name"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end
