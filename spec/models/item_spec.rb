require 'rails_helper'

RSpec.describe Item, type: :model do
  
    it "should have a name" do
    item = Item.new
    item.name = "Test Item"
    expect(item.name).to eq("Test Item")
  end

  it "should NOT have a name" do
    item = Item.new
    expect(item.name).not_to eq("Test Item")
  end


end
