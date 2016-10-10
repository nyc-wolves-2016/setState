class UsersController < ApplicationController
  def new
  end

  def create
    user = User.new(user_params)

    user.save
    log_in user
    redirect_to root_url
  end
private
  def user_params
    params.require(:users).permit(:username, :email, :password)
  end
end
