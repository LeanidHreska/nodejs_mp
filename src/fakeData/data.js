const data = {
  products: [
    {
      title: 'Playstation 3',
      color: 'white',
    }, {
      title: 'Xbox One',
      color: 'white',
    }, {
      title: 'Playstation 4',
      color: 'black',
    }
  ],
  users: [
    {
      id: '1',
      email: 'productAdmin@gmail.com',
      password: '823214',
      role: 'admin',
    }, {
      id: '2',
      email: 'user@gmail.com',
      password: '823214',
      role: 'user',
    }
  ],
  reviews: [
    {
      productId: '1',
      reviewer: 'AlekseY1',
      comment: 'Nice!'
    },
    {
      productId: '2',
      reviewer: 'Nik',
      comment: 'Great'
    }
  ],
};

export default data;