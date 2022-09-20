Rails.application.routes.draw do
  root 'root#index'
  get '/api/message', to: 'root#message'
end
