class CreateItems < ActiveRecord::Migration
  def change
    create_table :items do |t|
      t.string :name
      t.text :description
      t.string :expected_sales_price
      t.string :actual_sales_price
      t.string :marketplace

      t.timestamps null: false
    end
  end
end
