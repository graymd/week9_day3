task create_items: :environment do

  20.times do
    Item.create!({
      name: Faker::Hacker.noun,
      description: Faker::Lorem.sentence(2),
      expected_sales_price: "$" + (rand(15...100)).to_s,
      actual_sales_price: "$" + (rand(15...100)).to_s,
      marketplace: Faker::Lorem.word,
      })
  end


end
