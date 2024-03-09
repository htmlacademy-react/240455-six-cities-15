export const Setting = {
  OffersCount: 312,
} as const;

export enum AppRoute {
  Favorites = '/favorites',
  Login = '/login',
  Offer = '/offer/:id',
  Root = '/'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const STARS_COUNT = 5 as const;

export const SORTING = [
  {
    name: 'Popular',
    isActive: true
  },
  {
    name: 'Price: low to high',
    isActive: false
  },
  {
    name: 'Price: high to low',
    isActive: false
  },
  {
    name: 'Top rated first',
    isActive: false
  },
];

export type Sorting = {
  name: string;
  isActive: boolean;
};

export const CITIES = [
  {
    name: 'Paris',
    isActive: false
  },
  {
    name: 'Cologne',
    isActive: false
  },
  {
    name: 'Brussels',
    isActive: false
  },
  {
    name: 'Amsterdam',
    isActive: true
  },
  {
    name: 'Hamburg',
    isActive: false
  },
  {
    name: 'Dusseldorf',
    isActive: false
  }
];

export type City = {
  name: string;
  isActive: boolean;
};
