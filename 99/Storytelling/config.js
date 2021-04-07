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
     
      
    ]
};
