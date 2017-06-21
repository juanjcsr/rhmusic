require 'rails_helper'

RSpec.describe 'Tracks API' do

  #test data:
  let!(:album) { create(:album) }
  let!(:tracks) { create_list(:track, 20, album_id: album.id)}
  let(:album_id) { album.id }
  let(:id) { tracks.first.id }

  describe 'GET /api/albums/:album_id/tracks' do
    before { get "/api/albums/#{album_id}/tracks" }

    context 'when album exists' do
      it 'returns all album tracks' do
        expect(json.size).to eq(20)
      end

      it 'has a 200 status code' do
        expect(response).to have_http_status(200)
      end
    end

    context 'when album does not exist' do
      let(:album_id) { 99999 }

      it 'returns a not found message' do
        expect(response.body).to match(/Couldn't find Album/)
      end

      it 'has a 404 status code' do
        expect(response).to have_http_status(404)
      end
    end

  end

  describe 'GET /api/albums/:album_id/tracks/:id' do
    before { get "/api/albums/#{album_id}/tracks/#{id}" }

    context 'when an album track exists' do
      it 'returns the track' do
        expect(json['id']).to eq(id)
      end

      it 'has a 200 status code' do
        expect(response).to have_http_status(200)
      end
    end

    context 'when an album track does not exist' do
      let(:id) { 99999 }

      it 'returns an error message(not found)' do
        expect(response.body).to match(/Couldn't find Track/)
      end

      it 'has a 404 status code' do
        expect(response).to have_http_status(404)
      end
    end
  end

  describe 'POST /api/albums/:album_id/tracks' do
    let(:valid_attributes) {{name: "This is a new song"}}
    context 'when request attr are valid' do
      before { post "/api/albums/#{album_id}/tracks", params: valid_attributes}

      it 'has a 201 status code' do
        expect(response).to have_http_status(201)
      end
    end

    context 'when request attr are invalid' do
      before { post "/api/albums/#{album_id}/tracks", params: {} }

      it 'has an error message' do
        expect(response.body).to match(/Validation failed: Name can't be blank/)
      end

      it 'has an error status code' do
        expect(response).to have_http_status(422)
      end
    end
  end

  describe 'PUT /api/albums/:album_id/tracks/:id' do
    let(:valid_attributes) { {name: 'Edited song' } }

    before { put "/api/albums/#{album_id}/tracks/#{id}", params: valid_attributes}

    context 'when the track exists' do
      it 'updates the track' do
        updated = Track.find(:id)
        expect(updated.name).to match(/Edited song/)
      end
    end

    context 'when the track does not exist' do
      let(:id) { 0 }
      it 'returns an error msg' do
        expect(response).to match(/Couldn't find Track/)
      end
    end
  end

  describe 'DELETE /api/albums/:album_id/tracks/:id' do
    before { delete "/api/albums/#{album_id}/tracks/#{id}"}
    it 'should return a 204 status code' do
      expect(response).to have_http_status(204)
    end
  end
end