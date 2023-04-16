Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  get "about", to: "about#index", as: :about_custom
  #if get "demo/about" can be accessed as demo_about_path in erb for redirections
  root to:"main#index"
  # Defines the root path route ("/")
  # root "articles#index"

  get "sign_up", to: "registration#new", as: :sign_up_path
  post "sign_up", to: "registration#create"
end
