require 'rails_helper'

RSpec.describe ItemsController, type: :controller do

  let!(:item) { FactoryGirl.create(:item) }

  describe "GET #index" do
    it "should return all item objects" do
      xhr :get, :index
      expect(assigns(:items)).not_to eq(nil)
      expect(assigns(:items).length).to eq(1)
      expect(assigns(:items)).to include(item)
    end
  end

  describe "GET #show" do
    it 'should return a specific item object' do
      xhr :get, :show, id: item
      expect(assigns(:item)).to eq(item)
    end
  end

  describe "GET #new" do
    it 'should initialize new item object' do
      xhr :get, :new
      expect(assigns(:item).new_record?).to eq(true)
      expect(assigns(:item).class).to eq(Item)
    end
  end

  describe "POST #create" do
    it 'should create an item object successfully' do
      xhr :post, :create, item:  { name: 'Test String' }
      expect(assigns(:item).class).to eq(Item)
      expect(assigns(:item)).not_to be_new_record
      expect(assigns(:item).persisted?).to eq(true)
    end

    it 'should create an item object unsuccessfully' do
      xhr :post, :create, item:{name: ''}
      expect(assigns(:item).class).to eq(Item)
      expect(assigns(:item)).to be_new_record
    end
  end

  describe 'GET #edit' do
    it 'should return a specfic object' do
      xhr :get, :edit, id: item
      expect(assigns(:item)).to eq(item)
    end
  end

  describe 'PATCH #update' do
    it 'should edit an item object successfully' do
      xhr :patch, :update, id: item, item: { name: 'Updated Name' }
      expect(assigns(:item)).to eq(item)
      expect(assigns(:item).name).to eq('Updated Name')
    end

    it 'should edit an item object unsuccessfully' do
      xhr :patch, :update, id: item, item: { name: '' }
      puts "here's the items name #{item.name}"
      expect(assigns(:item)).to eq(item)
      expect(assigns(:item).errors.full_messages).to eq(["Name can't be blank"])
    end
  end

  describe 'DELETE #destroy' do
    it 'should delete an item object successfully' do
     expect{
        xhr :delete, :destroy, id: item
      }.to change(Item, :count).by(-1)
    end
  end

end
