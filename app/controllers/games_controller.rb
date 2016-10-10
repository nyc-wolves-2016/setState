class GamesController < ApplicationController

<<<<<<< HEAD
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
    @game = Game.find_by(id: params[:id])
    render 'games/show'
  end


=======
>>>>>>> React svgs in card component.
end
