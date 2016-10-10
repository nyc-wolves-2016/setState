class CreateGames < ActiveRecord::Migration[5.0]
  def change
    create_table :games do |t|
      t.integer :guesses
      t.time :game_length
      t.integer :sets_found
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
