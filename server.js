const express = require('express');
const app = express();
const cors = require('cors');

app.set('port', process.env.PORT || 3001);
app.use(cors());
app.locals.title = 'Pets Rescue Data';
app.locals.petsData = [
  {
    "id": 1,
    "name": "Lester",
    "type": "Adult",
    "picture": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/56505638/1/?bust=1659166854&width=720",
    "sex": "Male",
    "size": "Medium",
    "health": "Has been neutered, vaccinated, microchipped, is negative for FeLV and FIV", 
    "about": "He is a sweet and kind older brown/black majestic tabby. He is a lovely guy and loves attention. He enjoys playing with all kinds of toys. He is very friendly and enjoy his humans. He is a gentle boy and loves attention! He lives with 2 dogs",
    "adopt": "Send an email to AdoptLester@CAtRehome.org or call 541-225-4955."
  },
  {
    "id": 2,
    "name": "Polly",
    "type": "Young",
    "picture": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/56495973/3/?bust=1659165892&width=720",
    "sex": "Female",
    "size": "Medium",
    "health": "Has been neutered, vaccinated and is negative for FeLV and FIV", 
    "about": "With her sleek black coat and her mitten-like front paws, teenager kitty Polly is irresistibly adorable and playful. She loves nothing more than to play with everything and everyone, and anything can be a toy for Polly. Polly loves to scamper through cat tunnels, chase and pounce, and run around with the other kitties in her foster home. While it takes her a little time to warm up to people, once she\'s comfortable, she\'s happy to accept pets and even belly rubs. She likes to keep you company while you\'re on the computer. She would be happiest in a home with at least one other playful young cat.",
    "adopt": "send an email to AdoptPolly@CAtRehome.org or call 541-225-4955"
  },
  {
    "id": 3,
    "name": "Mr. Nilson",
    "type": "Kitten",
    "picture": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/56407716/2/?bust=1659167167&width=720",
    "sex": "Male",
    "size": "Medium",
    "health": "Has been neutered, vaccinated and is negative for FeLV and FIV", 
    "about": "He is a medium hair male ginger and white tabby kitten with unique facial markings. He\'s a confident kitty who likes everyone he meets, from small children to neighborhood grandparents. He is playful and loves string toys in particular. After a bout of playing, he likes to snuggle up with his humans for a nap. He is a happy, delightful young kitty who will be a happy addition to some lucky home.",
    "adopt": "send an email to AdoptMrNilson@CAtRehome.org or call 541-225-4955"
  },
  {
    "id": 4,
    "name": "Sarge",
    "type": "Adult",
    "picture": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55321811/1/?bust=1659165128&width=720",
    "sex": "Male",
    "size": "Medium",
    "health": "Vaccinations up to date, spayed / neutered, is negative for FeLV and FIV.", 
    "about": "He is a sweet adult black bear of a kitty, with short hair and a stocky build. He is very friendly, confident, and affectionate. Sarge has a big personality and likes to 'own' any room he happens to occupy and will let you know by his assertive vocalizations that he is in charge! He is active and curious, and absolutely adores being around people of all ages (males and females). He will be happiest in a home where he has some safe access to the outside, such as a catio or a well-fenced backyard (he even enjoys rides in a stroller!)",
    "adopt": "send an email to AdoptSarge@CAtRehome.org or call 541-225-4955"
  },
  {
    "id": 5,
    "name": "Mr Moonglow",
    "type": "Adult",
    "picture": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/53044356/1/?bust=1632245410&width=720",
    "sex": "Male",
    "size": "Medium",
    "health": "Vaccinations up to date, spayed / neutered, is negative for FeLV and FIV, special needs.", 
    "about": "Mr Mooglow is super friendly. He is affectionate and likes to be with people. His friendliness with other cats is random, but could be some insecurities due to his impaired vision. Moonie can see and has no problem getting around at this time. Moonie has cataracts in both eyes, in which there is no treatment. He has glaucoma in his right eye. This eye requires an eye drop twice daily. The eye drops relieve the pressure caused by the glaucoma. At some point this condition could worsen and would require the eye to be removed. Mr Moonglow needs an adopter that will be committed to his ongoing care. A stable home that is on the quiet side, but full of play time and kitty shenanigans!!",
    "adopt": "send an email to AdoptMrMoonglow@CAtRehome.org or call 541-225-4955"
  },
  {
    "id": 6,
    "name": "Thora",
    "type": "Adult",
    "picture": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/48013511/5/?bust=1589980898&width=720",
    "sex": "Female",
    "size": "Medium",
    "health": "Vaccinations up to date, spayed / neutered.", 
    "about": "Thora is a shy girl, but outgoing once she gets to know you. She will need a patient adopter. She follows her mom to the kitchen every morning and sits promptly on the floor ready to be brushed and have her rump scratched. Thora has a couple of cats in her home that she 'tolerates', but does not like a lot of other cats around. She is passive and stays to herself mostly. Her favorite spot is at the top of the kitty tower. We believe Thora will thrive given a chance in the right home!",
    "adopt": "send an email to AdoptMrMoonglow@CAtRehome.org or call 541-225-4955"
  },
  {
    "id": 7,
    "name": "Slater",
    "type": "Adult",
    "picture": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/52753566/2/?bust=1652119402&width=720",
    "sex": "Male",
    "size": "Large",
    "health": "Vaccinations up to date, spayed / neutered.", 
    "about": "Slater is a sweet gentle big boy! He loves to be brushed, He is very vocal when he knows it's time to eat, he's usually the first to the bowl! Slater can be a little shy with new situations or environments so would need a little time to acclimate and bond with his new family.",
    "adopt": "send an email to AdoptSlater@CAtRehome.org or call 541-225-4955"
  },
  {
    "id": 8,
    "name": "Maxie",
    "type": "Young",
    "picture": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/52926992/2/?bust=1642007591&width=720",
    "sex": "Female",
    "size": "Medium",
    "health": "Vaccinations up to date, spayed / neutered.", 
    "about": "Maxie responds well to treats and grooming. She loves being close to her mom, curiously watching her as she does dishes, laundry and such! She has a sweet temperament and is a loving lap kitty!",
    "adopt": "send an email to AdoptMaxie@CAtRehome.org or call 541-225-4955"
  }
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

app.use(express.json());
app.post('/api/v1/petsData', (request, response) => {
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