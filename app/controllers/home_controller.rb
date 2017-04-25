class HomeController < ApplicationController
  def index
    @posts = Post.paginate(:page => params[:page], :per_page => 20)
  end

  def fetch_post
    @post = Post.find(params[:post_id])
    respond_to do |format|
      format.js
    end
  end
end
