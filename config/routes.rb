Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  get "about", to: "about#index", as: :about_custom

  root to:"main#index"
  # Defines the root path route ("/")
  # root "articles#index"
end
