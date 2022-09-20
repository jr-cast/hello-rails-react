class RootController < ApplicationController
  def index; end

  def message
    render json: { message: Message.all.sample.message }
  end
end
