class Api::AlbumsController < ApplicationController
  before_action :set_album, only: [:show, :update, :destroy]

  def index
    @albums = Album.all
    json_response(@albums)
  end

  def create
    @album = Album.create!(album_params)
    json_response(@album, :created)
  end
  
  def show
    json_response(@album)
  end

  def update
    @album.update(album_params)
  end

  def destroy
    @album.destroy
    head :no_content
  end

  private

  def album_params
    params.permit(:name)
  end

  def set_album
    @album = Album.find(params[:id])
  end
end
