export interface IRespuestaTodos<T> {
    info: IInfo;
    results: Array<T>;
};

export interface IPaginacion {
    page: number;
};

export interface IInfo {
    count: number;
    pages: number;
    next: string;
    prev: string | null;
};

export interface IPersonaje {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: IOrigin;
    location: ILocation;
    image: string;
    episode: Array<string>[];
    url: string;
    created: string;
};

export interface IOrigin {
    name: string;
    url: string;
};

export interface ILocation {
    name: string;
    url: string;
};