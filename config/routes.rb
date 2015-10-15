Rails.application.routes.draw do
  root 'home#index'  
  resources :datatables, only: [:index]
end
