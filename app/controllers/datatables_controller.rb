class DatatablesController < ApplicationController
  def index
    datatables = Datatable.all 
    datatables = datatables.limit(params[:limit]) if params[:limit].present?
    datatables = datatables.offset(params[:offset]) if params[:offset].present?
    respond_to do |format|
      format.json { 
        render json: datatables
      }
    end
  end
end