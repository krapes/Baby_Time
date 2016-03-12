namespace :export do
  desc "Prints Year.all in a seeds.rb way."
  task :seeds_format => :environment do
    Year.order(:id).all.each do |year|
      puts "Year.create(#{year.serializable_hash.delete_if {|key, value| ['created_at','updated_at','id'].include?(key)}.to_s.gsub(/[{}]/,'')})"
    end

    Month.order(:id).all.each do |month|
      puts "Month.create(#{month.serializable_hash.delete_if {|key, value| ['created_at','updated_at','id'].include?(key)}.to_s.gsub(/[{}]/,'')})"
    end

    Assignment.order(:id).all.each do |assignment|
      puts "Assignment.create(#{assignment.serializable_hash.delete_if {|key, value| ['created_at','updated_at','id'].include?(key)}.to_s.gsub(/[{}]/,'')})"
    end
  end
end
