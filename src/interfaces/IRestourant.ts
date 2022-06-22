export interface IRestourantPageResponse {
  _id: string;
  name: string;
  logo: string;
  profilePhoto: string;
  isOpen: boolean;
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
    tags: ITag[];
    photos: string[];
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

export interface ITag {
  _id: number;
  name: string;
}

export type days =
  | "monday"
  | "tuesday"
  | "wednesday"
  | "thursday"
  | "friday"
  | "saturday"
  | "sunday";
