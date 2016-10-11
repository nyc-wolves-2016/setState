class SessionsController < ApplicationController
  def new
  end

  def create
    user = User.find_by(email: params[:session][:email].downcase)
    if user && user.authenticate(params[:session][:password])
      # Helper methods -- session_helper.rb
      log_in(user)
      # binding.pry
      redirect_to root_url
    else
      flash.now[:danger] = 'Invalid email/password combination'
      render 'new'
    end
  end

  def destroy
    puts "*" * 25
    puts "I'm in destroy session route"
    puts "*" * 25
    log_out
    redirect_to root_url
  end
end
