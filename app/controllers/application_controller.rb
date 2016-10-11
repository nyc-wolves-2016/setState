class ApplicationController < ActionController::Base
  protect_from_forgery

  # include SessionsHelper

  # Logs in the given user.
  def log_in(user)
    puts "*" * 25
    puts "I'm logging in!"
    p user
    puts "*" * 25
    session[:user_id] = user.id
  end

  # Returns the current logged-in user (if any).
  def current_user
    puts "*" * 25
    puts "I'm accessing the current user"
    p @current_user ||= User.find_by(id: session[:user_id])
    puts "*" * 25
    @current_user ||= User.find_by(id: session[:user_id])
  end

  # Returns true if the user is logged in, false otherwise.
  def logged_in?
    !current_user.nil?
  end

  # Logs out the current user.
  def log_out
    session.delete(:user_id)
    @current_user = nil
  end

  helper_method :log_out, :logged_in?, :current_user, :log_in
end
