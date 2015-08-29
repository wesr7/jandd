class PagesController < ApplicationController
    def main
        @response = Instagram.tag_search('thejuanfordanielle')
        @tags = @response[0].name
        @images = []
        for media_item in Instagram.tag_recent_media(@tags)
            @images << media_item['images']['low_resolution']['url']
        end
        @images
    end

end
