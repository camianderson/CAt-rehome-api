const express = require('express');
const app = express();
const cors = require('cors');

app.set('port', process.env.PORT || 3001);
app.use(cors());
app.locals.title = 'Pets Rescue Data';
app.locals.petsData = [
  { id: '1', name: 'Lester', type: 'cat', picture: 'https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/56505638/1/?bust=1659166854&width=720', sex: 'male', size: 'medium', health: 'has been neutered, vaccinated, microchipped, is negative for FeLV and FIV', about: 'LESTER is a sweet and kind older brown/black majestic tabby. He is a lovely guy and loves attention. He enjoys playing with all kinds of toys. He had been dumped behind Sata Clara Animal Hospital. It onl took him a day to become friendly and enjoy his humans. Lester wants nothing more than to be love. He is a gentle boy and loves attention! Wouldn\'t you love to bring him home and have him as a furever friend?', adopt: 'send an email to AdoptInfo@CatRescues.org or call 541-225-4955 option 1.' },
  { id: '2', name: 'Polly', type: 'cat', picture: 'https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/56495973/3/?bust=1659165892&width=720', sex: 'female', size: 'medium', health: 'has been neutered, vaccinated, microchipped, is negative for FeLV and FIV', about: 'With her sleek black coat and her mitten-like front paws, teenager kitty POLLY is irresistibly adorable and playful. She loves nothing more than to play with everything and everyone, and anything can be a toy for Polly. Polly loves to scamper through cat tunnels, chase and pounce, and run around with the other kitties in her foster home. While it takes her a little time to warm up to people, once she\'s comfortable, she\'s happy to accept pets and even belly rubs. She likes to keep you company while you\'re on the computer. Polly was rescued from a colony of stray cats, and after discovering that she was friendly, we decided to put her in a loving foster home. Now Polly is ready to go to her very own forever home. She would be happiest in a home with at least one other playful young cat.', adopt: 'send an email to AdoptInfo@CatRescues.org or call 541-225-4955 option 1.' },
  { id: '3', name: 'Mr. Nilson', type: 'cat', picture: 'https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/56407716/2/?bust=1659167167&width=720', sex: 'male', size: 'medium', health: 'has been neutered, vaccinated, microchipped, is negative for FeLV and FIV', about: 'MR. NILSON is a medium hair male ginger and white tabby kitten with unique facial markings. He\'s a confident kitty who likes everyone he meets, from small children to neighborhood grandparents. He is playful and loves string toys in particular. After a bout of playing, he likes to snuggle up with his humans for a nap. He came to our cat rescue group with his sister Annika when a local vet, a good Samaritan, cared for them until they were old enough to be transferred to us. He is a happy, delightful young kitty who will be a happy addition to some lucky home.', adopt: 'send an email to AdoptInfo@CatRescues.org or call 541-225-4955 option 1.' }
]

app.get('/api/v1/petsData', (request, response) => {
  const petsData = app.locals.petsData;
  response.json({petsData});
});

app.get('/api/v1/petsData/:id', (request, response) => {
  const { id } = request.params;
  const pet = app.locals.petsData.find(pet => pet.id === id);
  if (!pet) {
    return response.sendStatus(404);
  }

  response.status(200).json(pet);
});

app.post('/api/v1/pets', (request, response) => {
  const id = Date.now();
  const pet = request.body;

  for (let requiredParameter of ['name', 'type', 'picture', 'sex', 'size', 'health', 'about', 'adopt']) {
    if (!pet[requiredParameter]) {
      response
        .status(422)
        .send({ error: `Expected format: { name: <String>, type: <String>, picture: <String>, sex: <String>, size: <String>, health: <String>, about: <String>, adopt: <String>}. You're missing a "${requiredParameter}" property.` });
    }
  }

  const { name, type, picture, sex, size, health, about, adopt } = pet;
  app.locals.petsData.push({ id, name, type, picture, sex, size, health, about, adopt });
  response.status(201).json({ id, name, type, picture, sex, size, health, about, adopt });
});

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
});

// Pet Rescue is a website to find homes for cats in the Orange County community. Take a look at our cats and help them find wonderful and loving homes.