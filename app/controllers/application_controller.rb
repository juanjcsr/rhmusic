class ApplicationController < ActionController::Base
  include Response
  include ErrorHandler
  # protect_from_forgery with: :exception, unless: -> { request.format.json? }
end
