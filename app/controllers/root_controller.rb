class RootController < ApplicationController
  def index; end

  def message
    render json: { message: Message.limit(1).order("RANDOM()") }
  end
end
  