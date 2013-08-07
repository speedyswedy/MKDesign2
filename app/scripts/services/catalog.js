'use strict';

angular.module('MKDesignApp')
  .service('catalog', function catalog() {
    var items = [
                { id: 0,
                  name: 'soffa',
                  price: '34',
                  quantity : '1',
                  front_image : 'angelinasmall.jpg',
                  images: [{ small : 'angelinasmall.jpg',
                            large : 'angelina.jpg',
                            title : 'Angelina Jolie',
                            thumbnail : 'angelina_tmb.jpg',
                            alt : 'Angelina'
                          },
                          { small : 'saleensmall.jpg',
                                large : 'saleen.jpg',
                                title : 'Saleen S7 Twin Turbo',
                                thumbnail : 'saleen_tmb.jpg',
                                alt : 'Saleen'
                          },
                          { small : 'jaguarsmall.jpg',
                                large : 'jaguar.jpg',
                                title : 'Jaguar Type E',
                                thumbnail : 'jaguar_tmb.jpg',
                                alt : 'Jaguar'
                          },
                          { small : 'listenmusic.jpg',
                                large : 'listenmusic.jpg',
                                title : 'Relaxing Music',
                                thumbnail : 'listen_tmb.jpg',
                                alt : 'Relaxing Music',
                                dimension : '300, 225'
                          }]
                }
                ];
    return {
        get: function() {
            return items;
        }};
    });