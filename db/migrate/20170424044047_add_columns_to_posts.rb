class AddColumnsToPosts < ActiveRecord::Migration[5.0]
  def up
    add_column :posts, :image_url, :string, :default => 'https://placeholdit.imgix.net/~text?txtsize=6&txt=50%C3%9750&w=50&h=50'
    add_column :posts, :body, :text
  end

  def down
    remove_column :posts, :image_url
    remove_column :posts, :body
  end
end
