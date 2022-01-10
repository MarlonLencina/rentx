interface AcessoriesProps {
   type: string;
   name: string;
}

export interface ICarPropsDTO {
    id: string;
    brand: string;
    name: string;
    about: string;
    fuel_type: string;
    rent: {
        period: string;
        price: string;
    },
    thumbnail: string;
    accessories: AcessoriesProps[];
    photos: string[];
}
