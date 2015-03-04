class ItemsController < ApplicationController
  before_action :set_item, only: [
    :show,
    :edit,
    :update,
    :destroy,
  ]

  def index
    @items = Item.all
    respond_to do |format|
      format.json {render json: @items }
    end
  end

  def show
    @item = Item.find params[:id]
    respond_to do |format|
      format.json {render json: @item }
    end
  end

  def new
    @item = Item.new
    respond_to do |format|
      format.json {render json: @item }
    end
  end

  def create
    @item = Item.new item_params
    @item.save
    respond_to do |format|
      format.json { render json: @item }
    end
  end

  def edit
    respond_to do |format|
      format.json {render json: @item }
    end
  end

  def update
    @item.update_attributes item_params
    respond_to do |format|
      format.json { render json: @item }
    end
  end

  def destroy
    @item.destroy
    respond_to do |format|
      format.json { head :no_content }
    end
  end

private

  def set_item
    @item = Item.find params[:id]
  end

  def item_params
    params.require(:item).permit(
      :name,
      :description,
      :expected_sales_price,
      :actual_sales_price,
      :marketplace
      )

  end
end
