var config = {
    style: 'mapbox://styles/mapbox/outdoors-v11',
    accessToken: 'pk.eyJ1IjoiaG9semVnZyIsImEiOiJja242cWV3MmMwZ20wMnVwc2czZjJzenNwIn0.PI62Np0H-aZ3ydTGcbM96g',
    showMarkers: true,
    theme: 'light',
    title: 'Animated Bike Route',
    subtitle: 'Liberty Project',
    byline: '',
    footer: '',
    chapters: [
        {
            id: 'start',
            alignment: 'right',
            title: 'Start Location',
            image: '',
            description: 'The start Location for the Bike fundraiser',
            location: {
                center: [-89.2477, 48.3809],
                zoom: 9.83,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'phl-city-limits',
                    opacity: .45
                }
            ],
            onChapterExit: [
                {
                    layer: 'phl-city-limits',
                    opacity: 0
                }
            ]
        },
        {
            id: 'finish',
            alignment: 'right',
            title: 'Finish Point',
            image: '',
            description: 'The bike fundraiser ends here in Peteborough',
            location: {
                center: [-78.3197, 44.3091],
                zoom: 11.62,
                pitch: 55.50,
                bearing: -7.20
            },
            onChapterEnter: [
                {
                    layer: 'phl-bike-network',
                    opacity: 1
                }
            ],
            onChapterExit: []
        },
        // {
        //     id: 'indego',
        //     alignment: 'right',
        //     title: 'Indego Bike Share',
        //     image: '',
        //     description: 'Indego has been operating in Philadelphia since 20XX. The system initally was focused on Center City, but has expanded service to neighboring areas to support equitable mobility options to the city\'s residents.',
        //     location: {
        //         center: [-75.16468, 39.94503],
        //         zoom: 13.15,
        //         pitch: 60.00,
        //         bearing: -16.80
        //     },
        //     onChapterEnter: [
        //         {
        //             layer: 'indego-stations',
        //             opacity: 0.8
        //         }
        //     ],
        //     onChapterExit: [
        //         {
        //             layer: 'indego-stations',
        //             opacity: 0
        //         }
        //     ]
        // },
        // {
        //     id: 'belmont',
        //     alignment: 'right',
        //     title: 'Belmont Plateau Trails',
        //     image: '',
        //     description: 'A short ride along the Schuylkill River Trail from the Art Museum, Belmont is a twisty, log-ridden rollercoaster of a trail network. It is easy to get turned around, the underbrush is at times impenetrable, and short steep sections come out of nowhere. In other words, it\'s really fun',
        //     location: {
        //         center: [-75.20325, 39.99574],
        //         zoom: 14.99,
        //         pitch: 44.00,
        //         bearing: -40.00
        //     },
        //     onChapterEnter: [
        //         {
        //             layer: 'belmont',
        //             opacity: 1
        //         }
        //     ],
        //     onChapterExit: [
        //         {
        //             layer: 'belmont',
        //             opacity: 0
        //         }
        //     ]
        // },
        // {
        //     id: 'wiss',
        //     alignment: 'right',
        //     title: 'Wissahickon Park Trails',
        //     image: '',
        //     description: 'This steep, rocky gorge can be surprisingly technical. Follow the orange and yellow trails to repeatedly climb and descend through the schist hillsides (careful of the cliffs), or stick to the gravel Forbidden Drive for a relaxing ride along the creek. You\'ll forget you\'re in a city.',
        //     location: {
        //         center: [-75.21223, 40.05028],
        //         zoom: 13.08,
        //         pitch: 47.50,
        //         bearing: 32.80
        //     },
        //     onChapterEnter: [
        //         {
        //             layer: 'wissahickon',
        //             opacity: 1
        //         }
        //     ],
        //     onChapterExit: [
        //         {
        //             layer: 'wissahickon',
        //             opacity: 0
        //         }
        //     ]
        // },
        // {
        //     id: 'pennypack',
        //     alignment: 'right',
        //     title: 'Pennypack Park Trails',
        //     image: '',
        //     description: 'Pennypack is a great introduction trail system. Not too steep and not too technical, the beautiful wooded park also provides a great escape from urban life. The south side trails are originally bridle trails, so be nice to equestrians and dismount when you approach them.',
        //     location: {
        //         center: [-75.05685, 40.06839],
        //         zoom: 13.73,
        //         pitch: 43.50,
        //         bearing: 96.80
        //     },
        //     onChapterEnter: [
        //         {
        //             layer: 'pennypack',
        //             opacity: 1
        //         }
        //     ],
        //     onChapterExit: [
        //         {
        //             layer: 'pennypack',
        //             opacity: 0
        //         }
        //     ]
        // }
    ]
};
