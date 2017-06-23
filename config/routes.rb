Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    resources :albums do
      resources :tracks
    end
  end

  root to: "ng2_rh_music#index"
  get "/*path", controller: "ng2_rh_music", action: "index"
end
