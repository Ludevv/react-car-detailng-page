const { v4: uuid } = require("uuid");

const carsData = [
  {
    id: uuid(),
    img: "https://iv.pl/images/9eaf155188c08444c34ff16519448f32.jpg",
    date: "2020-01-24",
    describle:
      "Zabezpieczamy lakier specjalną powłoką ceramiczną OptiCoat. Dzięki temu nie tylko świetnie wygląda, ale jest także odporny na uszkodzenia. Zobacz, jak lśnią auta, którymi do tej pory się zajęliśmy.",
    title: "Ford Focus RS",
  },
  {
    id: uuid(),
    img:
      "https://i.wpimg.pl/730x0/m.autokult.pl/ford-mustang-mach-1-2021-a689162.jpg",
    date: "2020-05-15",
    describle:
      "Renowacja lakieru to jak operacja plastyczna dla Twojego auta. Obejrzyj samochody naszych klientów przed i po odświeżeniu. Jak z salonu, prawda?",
    title: "Ford Mustang",
  },
  {
    id: uuid(),
    img:
      "https://maxtondesign.pl/pol_pl_Splitter-Przedni-VW-Golf-7-R-Polift-V-3-965_2.jpg",
    date: "2020-07-30",
    describle:
      "Zabezpieczamy lakier specjalną powłoką ceramiczną OptiCoat. Dzięki temu nie tylko świetnie wygląda, ale jest także odporny na uszkodzenia. Zobacz, jak lśnią auta, którymi do tej pory się zajęliśmy.",
    title: "VW Golf R",
  },
  {
    id: uuid(),
    img:
      "https://www.tuningblog.eu/wp-content/uploads/2019/09/BB-VW-Golf-VII-GTI-TCR-Tuning-2019-3.jpg",
    date: "2020-12-04",
    describle:
      "Zabezpieczamy lakier specjalną powłoką ceramiczną OptiCoat. Dzięki temu nie tylko świetnie wygląda, ale jest także odporny na uszkodzenia. Zobacz, jak lśnią auta, którymi do tej pory się zajęliśmy.",
    title: "VW Golf GTI",
  },
  {
    id: uuid(),
    img:
      "https://m.autokult.pl/g5r4trgf-993bb6fc88caa6666a33520,910,500,0,0.jpg",
    date: "2021-01-24",
    describle:
      "Zabezpieczamy lakier specjalną powłoką ceramiczną OptiCoat. Dzięki temu nie tylko świetnie wygląda, ale jest także odporny na uszkodzenia. Zobacz, jak lśnią auta, którymi do tej pory się zajęliśmy.",
    title: "Seat Cupra",
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
      id: uuid(),
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
