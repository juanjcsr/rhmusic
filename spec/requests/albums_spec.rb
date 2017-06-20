require 'rails_helper'

RSpec.describe 'Albums API', type: :request do
  let!(:albums) { create_list(:album, 10) }
  let(:album_id) { albums.first.id }

  describe 'GET /api/albums' do
    before { get '/api/albums' }

    it 'returns albums' do
      expect(json).not_to be_empty
      expect(json.size).to eq(10)
    end

    it 'has a 200 status code' do
      expect(response).to have_http_status(200)
    end
  end

  describe 'GET /api/albums/:id' do
    before { get "/api/albums/#{todo_id}" }

    context 'when the album exists' do
      it 'returns the album' do
        expect(json).not_to be_empty
        expect(json['id']).to eq(album_id)
      end

      it 'has a 200 status code' do
        expect(response).to have_http_status(200)
      end
    end

    context 'when the album does not exist' do
      let(:todo_id) { 999 }

      it 'has a 404 status code' do
        expect(response).to have_http_status(404)
      end

      it 'returns a not found message' do
        expect(response.body).to match(/no album/)
      end
    end
  end

  describe 'POST /api/albums' do
    let(:valid_attributes) { { name: 'A New Album' }}

    context 'when the request is valid' do
      before { post '/api/albums', params: :valid_attributes }

      it 'creates an album' do
        expect(json['name']).to eq('A New Album')
      end

      it 'returns status code 201' do
        expect(response).to have_http_status(201)
      end
    end

    context 'when the request is invalid' do
      before { post '/api/albums', params: { name: nil} }

      it 'returns status code 422' do
        expect(response).to have_http_status(422)
      end
      it 'returns a failure-to-validate message' do
        expect(response.body).to match("/validation failed/")
      end
    end
  end

  describe 'PUT /api/albums/:id' do
    let(:valid_attributes) { { name: 'An Edited Album' } }

    context 'when the album exists' do
      before { put "/api/albums/#{album_id}", params: valid_attributes }
      it 'updates the album' do
        expect(response.body).to be_empty
      end

      it 'has a 204 status code' do
        expect(response).to have_http_status(204)
      end
    end
  end

  describe 'DELETE /api/albums/:id' do
    before { delete "/api/albums/#{album_id}" }
    it 'has status code 204' do
      expect(response).to have_http_status(204)
    end
  end
end