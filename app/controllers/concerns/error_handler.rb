module ErrorHandler
  extend ActiveSupport::Concern

  included do
    rescue_from ActiveRecord::RecordNotFound do |e|
      json_response({message: e.message}, :not_found)
    end 

    rescue_from ActiveRecord::RecordInvalid do |e|
      json_response({message: 'validation failed'}, :unprocessable_entity)
    end
  end
end