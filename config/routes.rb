Rails.application.routes.draw do
  root to: "home#index", as: 'root'
  get '/fetch_post' => 'home#fetch_post', as: 'fetch_post'
end
