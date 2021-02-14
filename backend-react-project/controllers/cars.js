// const { v4: uuid } = require("uuid");

const carsData = [
  {
    id: 0,
    img: "https://mediapool.bmwgroup.com/cache/P9/201803/P90295640/P90295640-the-new-bmw-m2-coup-edition-black-shadow-03-2018-2371px.jpg",
    date: "2020-01-24",
    describle:
      "W nasze ręce trafiło piękne BMW M2 Competition. Standardowy czarny lakier przykryliśmy folią 3M Satin Dark – proces ten wykonaliśmy we wszystkich wnękach aby całość prezentowała się niczym prawdziwy lakier!",
    title: "BMW M2 Competition",
  },
  {
    id: 1,
    img:
      "https://www.mercedes-benz.pl/passengercars/mercedes-benz-cars/models/s-class/coupe-c217/amg/equipment/_jcr_content/swipeableteaserbox/par/swipeableteaser_1066808109/asset.MQ6.12.20191011065837.jpeg",
    date: "2020-05-15",
    describle:
      "Prezentowane państwu auto trafiło do nas w dniu odbioru z salonu. Zajęliśmy się nim w pełni kompleksowo, realizując usługi z zakresu detailingu oraz wrappingu.",
    title: "Mercedes-AMG S 63",
  },
  {
    id: 2,
    img:
      "https://www.autotest.sk/wp-content/uploads/2017/09/seat-leon-cupra-r-2018.jpg",
    date: "2020-07-30",
    describle:
      "Nowy Seat Cupra Leon dotrał do nas prosto z salonu, z dokładnie określoną wizją jego wyglądu przez klienta. Jeszcze przed odebraniem z salonu samochód miał zmienić swoje oblicze dzięki folii 3M Satin Grey Aluminium.",
    title: "Seat Cupra Leon",
  },
  {
    id: 3,
    img:
      "https://i1.wp.com/cartests.net/wp-content/uploads/2020/02/2020-volkswagen-golf-gti_main.jpg?fit=1200%2C800&ssl=1",
    date: "2020-12-04",
    describle:
      "Wyjątkowy kolor lakieru Misanorot Rosse Perleffect na wyjątkowym Golfie GTI wymagał równie wyjątkowej opieki. Aby jazda nie niosła ryzyka uszkodzeń lakieru, w całości został przez nas zabezpieczony bezbarwną folią ochronną!",
    title: "VW Golf GTI",
  },
  {
    id: 4,
    img:
      "https://iv.pl/images/68e4d1224c24f22f4ef92042bc765476.jpg",
    date: "2021-01-24",
    describle:
      "Im wcześniej... wiadomo, tym lepiej! Mówimy oczywiście o zabezpieczeniu lakieru przed wszelkimi uszkodzeniami, jeszcze przed wyjazdem na drogi. Tym razem padło na Golfa R",
    title: "VW Golf R",
  },
];



exports.getCars = (request, response, next) => {
  try {
    response.status(200).json({
      cars: carsData,
    });
  } catch (error) {
    response.status(500).json({
      error,
      message:
        "Oops! Coś poszło nie tak, przy metodzie GET w endpointcie /cars",
    });
  }
};

exports.getCar = (request, response, next) => {
  try {
    const { id } = request.params;

    const carToSend = carsData.find((car) => car.id === id);

    if (!carToSend) {
      response.status(404).json({
        message: "Nie znaleziono samochodu o podanym id",
      });

      return;
    }

    response.status(200).json({
      car: carToSend,
    });
  } catch (error) {
    response.status(500).json({
      error,
      message:
        "Oops! Coś poszło nie tak, przy metodzie GET w endpointcie /cars/:id",
    });
  }
};

exports.postCar = (request, response, next) => {
  try {
    const { describle, img, date, title } = request.body;
    if (!describle || !date || !title) {
      response.status(400).json({
        message: "Nie podano wszystkich wymaganych informacji",
      });

      return;
    }

    const isCarExist = carsData.some(
      ({ title: currentTitle }) => currentTitle === title
    );
    if (isCarExist) {
      response.status(409).json({
        message: `Istnieje już w bazie samochód ${title}`,
      });

      return;
    }

    const newCar = {
      // authors: authors,
      describle,
      id: carsData.length,
      img,
      date,
      title,
    };

    carsData.push(newCar);

    response.status(201).json({
      cars: carsData,
    });
  } catch (error) {
    response.status(500).json({
      error,
      message:
        "Oops! Coś poszło nie tak, przy metodzie POST w endpointcie /cars",
    });
  }
};

exports.putCar = (request, response, next) => {
  try {
    const { describle, id, date, title } = request.body;
    if (!describle || !id || !date || !title) {
      response.status(400).json({
        message: "Nie podano wszystkich wymaganych informacji",
      });

      return;
    }

    const indexCarToUpdate = carsData.findIndex((car) => car.id === id);
    if (indexCarToUpdate === -1) {
      response.status(404).json({
        message: "Nie znaleziono samochodu o podanym id",
      });

      return;
    }

    carsData.splice(indexCarToUpdate, 1, request.body);

    response.status(202).json({
      cars: carsData,
    });
  } catch (error) {
    response.status(500).json({
      error,
      message:
        "Oops! Coś poszło nie tak, przy metodzie PUT w endpointcie /cars",
    });
  }
};

exports.deleteCar = (request, response, next) => {
  try {
    const { id } = request.params;
    const indexCarToDelete = carsData.findIndex((car) => car.id === id);

    if (indexCarToDelete === -1) {
      response.status(404).json({
        message: "Nie znaleziono samochodu o podanym id",
      });

      return;
    }

    carsData.splice(indexCarToDelete, 1);
    response.status(200).end();
  } catch (error) {
    response.status(500).json({
      error,
      message:
        "Oops! Coś poszło nie tak, przy metodzie DELETE w endpointcie /cars/:id",
    });
  }
};

exports.carsData = carsData;
