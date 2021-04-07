var config = {
    style: 'mapbox.com/styles/v1/vanritto/ckn6u15wn0nzv17lm8p4o7x9v.html?fresh=true&title=view&access_token=pk.eyJ1IjoidmFucml0dG8iLCJhIjoiY2ttd3MwbmIxMGh2azJubjh5NHpmbWloaSJ9.cHakwI5tJ_9g4G56n5tlFQ#8.99/44.2742/-78.1637',
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
