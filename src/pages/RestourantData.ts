import { IRestourantPageResponse } from "../../../Restaurant-Review-Client/src/interfaces/IRestourant";
import profilePhoto from "../assets/RestourantProfile.png";
import logo from "../assets/Logo.png";
import photo1 from "../assets/Photo 1.png";
import photo2 from "../assets/Photo 2.png";
import photo3 from "../assets/Photo 3.png";
import photo4 from "../assets/Photo 4.png";
import photo5 from "../assets/Photo 5.png";

const restourantData: IRestourantPageResponse = {
  _id: "fjdsr23jadf3",
  name: "Happy Moons Moda Sahili",
  profilePhoto: profilePhoto,
  logo: logo,
  isOpen: true,
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
      { _id: 123, name: "Sigara İçilebilir" },
      { _id: 124, name: "Wifi" },
      { _id: 125, name: "Deniz Kenarı" },
      { _id: 126, name: "Otopark" },
      { _id: 127, name: "Vale" },
      { _id: 128, name: "Deniz Manzarası" },
    ],
    photos: [photo1, photo2, photo3, photo4, photo5, photo5],
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
