class PagesController < ApplicationController
    def main
        @endpoint="https://api.instagram.com/v1/tags/thejuanfordanielle/media/recent?access_token=10081932.64d472e.266dfc56a7c842ce9f18e45b4feee8b1"

        @response = HTTParty.get(@endpoint)

        @images = []

        @response['data'].each do |element|
            @images << element['images']['low_resolution']['url']
        end
        @images
    end

end
