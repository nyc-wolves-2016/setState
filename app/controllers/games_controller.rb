class GamesController < ApplicationController
  def new
    Game.all
  end
end
