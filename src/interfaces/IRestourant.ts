export interface IRestourantPageResponse {
  _id: string;
  name: string;
  profilePhoto: File;
  facility: {
    rate: number | undefined;
    price: number | undefined;
    hours: {
      monday: {
        start: string | undefined;
        end: string | undefined;
      };
      tuesday: {
        start: string | undefined;
        end: string | undefined;
      };
      wednesday: {
        start: string | undefined;
        end: string | undefined;
      };
      thursday: {
        start: string | undefined;
        end: string | undefined;
      };
      friday: {
        start: string | undefined;
        end: string | undefined;
      };
      saturday: {
        start: string | undefined;
        end: string | undefined;
      };
      sunday: {
        start: string | undefined;
        end: string | undefined;
      };
    };
    tags: string[];
    photos: File[];
    contact: {
      address: {
        city: string;
        province: string;
        full_address: string;
        phone: string;
      };
    };
  };
}
