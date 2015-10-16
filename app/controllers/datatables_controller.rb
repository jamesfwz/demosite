class DatatablesController < ApplicationController
  def index
    datatables = Datatable.all 
    datatables = datatables.where('id > ?', params[:after]) if params[:after].present?
    datatables = datatables.limit(params[:limit]) if params[:limit].present?
    respond_to do |format|
      format.json { 
        render json: datatables
      }
    end
  end
end