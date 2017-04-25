class AddPostTimeToPost < ActiveRecord::Migration[5.0]
  def up
    add_column :posts, :post_time, :datetime
  end

  def down
    remove_column :posts, :post_time
  end
end
