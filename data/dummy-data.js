
import Movie from '../models/movie';
import Category from '../models/category';

export const CATEGORIES = [
    new Category('c1', 'Kollywood', '#f5428d'),
    new Category('c2', 'Hollywood', '#f54242'),
    new Category('c3', 'Bollywood', '#f5a442'),
    new Category('c4', 'Mollywood', '#f5d142')
  ];
  
  

export const MOVIES = [
  new Movie(
    'm1',
    ['c1','c2'],
    'Jatrai jatra',
    'affordable',
    'simple',
    'https://m.media-amazon.com/images/M/MV5BY2UwNTU4MGItOGVlNi00ZjRjLTliZWMtZTU1YTFmNDg0OTllXkEyXkFqcGdeQXVyNzQ3NTY5MjE@._V1_.jpg',
    20,
    [
      'Bipin Karki',
      'Rabindra Baniya',
      'Rabindra Jha',
      'Dayahang Rai'
      
    ],
    
      'Jatrai Jatra is a 2019 Nepalese drama comedy heist thriller film,directed by Pradip Bhattarai and written by Rhythm Paudel',
    
    false,
    true,
    true,
    true
  ),

  new Movie(
    'm2',
    ['c1'],
    'Saili',
    'affordable',
    'simple',
    'https://m.media-amazon.com/images/M/MV5BZWU4NDg5ZWYtYTIxNS00MTY3LThkYjItZmEyMjZkNGU3OTY0XkEyXkFqcGdeQXVyNzQ3NTY5MjE@._V1_.jpg',
    10,
    [
      'Dayahang Rai',
      'Buddhi Tamang',
      'Menuka Pradhan'
    ],
    
      'Saili is a 2019 Nepali drama film,directed by Ram Babu Gurung.',
    
    false,
    false,
    false,
    false
  ),

  new Movie(
    'm3',
    ['c2'],
    'Snow White and the Huntsman',
    'pricey',
    'simple',
    'https://m.media-amazon.com/images/M/MV5BZmVmNjQxN2YtYjg2Ni00YzNkLWFmYWQtNTRmODJmNzc5Yjc4XkEyXkFqcGdeQWtlbGFyc2Vu._V1_.jpg',
    45,
    [
      'Charliz Therone',
      'Christen Stewart',
      'Chris Hemsworth'
    ],
    
      'Queen Ravenna, an evil woman, tasks Eric, a huntsman, with murdering Snow White, her stepdaughter,Instead of killing her, he ends up becoming her protector.',

    false,
    false,
    false,
    true
  ),

  new Movie(
    'm4',
    ['c3'],
    'Roohi',
    'luxurious',
    'challenging',
    'https://m.media-amazon.com/images/M/MV5BZTQzZjMwMDctNGY2OC00ZmU4LTgwYmEtNWIwMjE2Yjc4MmQ1XkEyXkFqcGdeQXVyMTI1NDAzMzM0._V1_.jpg',
    60,
    [
      'Rajkumar Rao',
      'Jahnvi Kapoor',
      'Varun Sharma',
      
    ],
    
      'Two bumbling pals are hired to kidnap a bride and find themselves in trouble when one falls for their abductee, and the other for the spirit possessing her.',
    
    false,
    false,
    false,
    false
  ),

  new Movie(
    'm5',
    ['c4', 'c3', 'c2'],
    'Anjaam Paathira',
    'luxurious',
    'simple',
    'https://m.media-amazon.com/images/M/MV5BNjYxMWUwNGUtZmRmMy00MDZlLTgwNDMtODVlOGFjMTBlNGJkXkEyXkFqcGdeQXVyMjkxNzQ1NDI@._V1_QL75_UY281_CR2,0,190,281_.jpg',
    15,
    [
      'Kunchako Boban',
      "Unnimaya",
      'Sreenath Bhasi'
      
    ],
    
      'When a string of serial killings happen in quick succession,Anwar must race against time to find the one responsible.',
      
  
    true,
    false,
    true,
    true
  ),
  new Movie(
    'm6',
    ['c4', 'c1'],
    'Anjaam Paathira',
    'luxurious',
    'simple',
    'https://m.media-amazon.com/images/M/MV5BNjYxMWUwNGUtZmRmMy00MDZlLTgwNDMtODVlOGFjMTBlNGJkXkEyXkFqcGdeQXVyMjkxNzQ1NDI@._V1_QL75_UY281_CR2,0,190,281_.jpg',
    15,
    [
      'Kunchako Boban',
      "Unnimaya",
      'Sreenath Bhasi'
      
    ],
    
      'When a string of serial killings happen in quick succession,Anwar must race against time to find the one responsible.',
      
    
    true,
    false,
    true,
    true
  ),

];
