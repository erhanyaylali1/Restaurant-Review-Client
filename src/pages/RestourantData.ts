import { IRestourantPageResponse } from "../interfaces/IRestourant";
import profilePhoto from "../assets/RestourantProfile.png";
import photo1 from "../assets/Photo 1.png";
import photo2 from "../assets/Photo 2.png";
import photo3 from "../assets/Photo 3.png";
import photo4 from "../assets/Photo 4.png";
import photo5 from "../assets/Photo 5.png";
import photo6 from "../assets/Photo 6.png";

const restourantData: IRestourantPageResponse = {
  _id: "fjdsr23jadf3",
  name: "Happy Moons Moda Sahili",
  profilePhoto: profilePhoto,
  facility: {
    rate: 4.3,
    price: 52,
    hours: {
      monday: {
        start: "10.00",
        end: "22.00",
      },
      tuesday: {
        start: "10.00",
        end: "22.00",
      },
      wednesday: {
        start: "10.00",
        end: "22.00",
      },
      thursday: {
        start: "10.00",
        end: "22.00",
      },
      friday: {
        start: "10.00",
        end: "22.00",
      },
      saturday: {
        start: "10.00",
        end: "24.00",
      },
      sunday: {
        start: "10.00",
        end: "24.00",
      },
    },
    tags: [
      "Sigara İçilebilir",
      "Wifi",
      "Deniz Kenarı",
      "Otopark",
      "Vale",
      "Deniz Manzarası",
    ],
    photos: [photo1, photo2, photo3, photo4, photo5, photo6],
    contact: {
      address: {
        city: "İstanbul",
        province: "Kadıköy",
        full_address:
          "Bahariye Caddesi, Nazmi Bey Sokak, No: 5/C, 34710, Kadıköy, İstanbul",
        phone: "+ 90 (216) 349 84 22",
      },
    },
  },
};

export default restourantData;
