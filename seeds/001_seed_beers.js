
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('beer').del()
    .then(function () {
      // Inserts seed entries
      return knex('beer').insert([
        {
          id: 1,
          name: 'Modelo Especial',
          manufacturer: 'Modelo',
          type: 'lager',
          image_url: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/modelo-1589821868.jpg',
          description: 'Mexican lagers are a warm-weather classic, and few have stood the test of time like Modelo Especial.',
          abv: 5.5
        },
        {
          id: 2,
          name: 'Miller High Life',
          manufacturer: 'Miller',
          type: 'lager',
          image_url: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/miller-high-life-1589822613.jpg',
          description: 'Another refreshing easy drinker is Miller High Life. Having been around since 1903, this lager is a key piece of American beer history.',
          abv: 6
        },
        {
          id: 3,
          name: 'Night Shift Nite Lite Craft Light Lager',
          manufacturer: 'Craft breweries',
          type: 'lager',
          image_url: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/nite-lite-1589912107.jpg',
          description: 'Big Beer, a.k.a. Budweiser and Coors, are most often associated with light lagers. Craft breweries make them too, though, and the results are typically even better.',
          abv: 4
        },
        {
          id: 4,
          name: 'Pilsner Urquell',
          manufacturer: 'Pilsner',
          type: 'lager',
          image_url: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pilsner-urquell-1589910548.jpg',
          description: 'Few beers can claim a history that dates back to the 13th century, but the purely perfect Pilsner Urquell is just that legendary.',
          abv: 5
        },
        {
          id: 5,
          name: 'Köstritzer Schwarzbier',
          manufacturer: 'Köstritzer',
          type: 'lager',
          image_url: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/kostritzer-1589911488.jpg',
          description: 'Not all lagers are light. A schwarzbier is a traditional German style that combines the easy-drinking nature of a lager (clean, low in alcohol) with the complex flavor profile of a porter or stout (roastiness, coffee, chocolate).',
          abv: 7
        },
        {
          id: 6,
          name: 'Weihenstephaner Hefe Weissbier',
          manufacturer: 'Hefe Weissbier',
          type: 'lager',
          image_url: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/weihenstephaner-1589912568.jpg',
          description: 'The Weihenstephan Abbey Brewery is one of the worlds oldest, founded in 1040. Its Hefe Weissbier is brimming with history—and a German wheat beers special flavors of banana and clove.',
          abv: 6.5
        },
        {
          id: 7,
          name: 'Yazoo Dos Perros Brown Ale',
          manufacturer: 'Yazoo',
          type: 'ale',
          image_url: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dos-perros-1589823800.jpg',
          description: 'Since opening in 2003, Yazoo has inspired a vibrant beer scene to bubble up in Nashville.',
          abv: 8
        },
        {
          id: 8,
          name: 'Newcastle Brown Ale',
          manufacturer: 'Newcastle',
          type: 'ale',
          image_url: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/newcastle-1589824561.jpg',
          description: 'If its something more straightforward youre after, Newcastle Brown Ale is like the brown ale poster child.',
          abv: 9
        },
        {
          id: 9,
          name: 'Guinness Draught Stout',
          manufacturer: 'Guinness',
          type: 'stout',
          image_url: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/guinness-1590002099.jpg',
          description: 'Guinness has been making the dark stuff in Dublin for nearly 250 years, and Guinness Draught Stout wrote the book on stouts, laying the groundwork for smooth and roasty dark beers with dreamy, creamy foam.',
          abv: 10
        },
        {
          id: 10,
          name: 'Goose Island Bourbon County Stout',
          manufacturer: 'Goose Island',
          type: 'stout',
          image_url: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bcs-1590077037.png',
          description: 'One could argue that the next most iconic stout after a Guinness is Goose Islands Bourbon County Stout. Introduced in the mid-1990s, the BCS became one of Americans most hyped beers.',
          abv: 10.5
        }
      ]);
    });
};
