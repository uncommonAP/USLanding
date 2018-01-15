require 'rack/cache'
require 'sprockets'
require_relative './server'

use Rack::Cache

map '/assets' do
  run Application.assets
end

run Application
