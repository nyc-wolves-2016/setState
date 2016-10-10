class GamesController < ApplicationController

  def new
    Game.all
  end

  def create
    @game = Game.new()
    current_user.games << @game
    if @game.save
      redirect_to 'games/show'
    else
      render 'games/new'
    end
  end

  def show
    render 'games/show'
  end


end
