class GamesController < ApplicationController

  def new
    # Game.all
  end

  def create
    # binding.pry
    @game = Game.new()
    current_user.games << @game
    if @game.save
      redirect_to game_path(@game)
    else
      render 'games/new'
    end
  end

  def show
    @game = Game.find_by(id: params[:id])
    render 'games/show'
  end

end
