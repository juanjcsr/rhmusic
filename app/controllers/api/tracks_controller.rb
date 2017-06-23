class Api::TracksController < ApplicationController
  before_action :set_album
  before_action :set_album_track, only: [:show, :update, :destroy]

  def index
    json_response(@album.tracks)
  end

  def show
    json_response(@track)
  end

  def create
    @album.tracks.create!(track_params)
    json_response(@album.tracks, :created)
  end

  def update
    @track.update(track_params)
    json_response(@track)
  end

  def destroy
    @track.destroy
    head :no_content
  end

  private 
  def set_album
    @album = Album.find(params[:album_id])
  end

  def set_album_track
    @track = @album.tracks.find_by!(id: params[:id]) if @album
  end

  def track_params
    params.permit(:name)
  end
end
