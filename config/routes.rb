Rails.application.routes.draw do
  root 'games#new'

  get '/register', to: 'users#new'
  post '/register', to: 'users#create'

  get    '/login',   to: 'sessions#new'
  post   '/login',   to: 'sessions#create'
  delete '/logout',  to: 'sessions#destroy'

  resources :games, except: :destroy

end
