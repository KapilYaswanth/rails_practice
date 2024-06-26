Rails.application.routes.draw do
  get 'static_pages/home'
  get 'static_pages/help'
  get 'static_pages/about'

  get 'users', to: 'users#index'

  resources :microposts
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  get "about", to: "about#index", as: :about_custom
  #if get "demo/about" can be accessed as demo_about_path in erb for redirections
  # root to:"application#goodbye"
  root "static_pages#home"
  # Defines the root path route ("/")
  # root "articles#index"

  # get "sign_up", to: "registration#new", as: :sign_up_path
  # post "sign_up", to: "registration#create"
end
