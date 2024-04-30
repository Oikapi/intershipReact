export type Movie = {
    id: string;
    name: string;
    type : string;
    description : string;
    rating : Rating;
    movieLength : number;
    countries: Country[];
    poster : string;
    genres: Genre[];
    title: string;
    completed: boolean;
    backdrop: Backdrop;
}
  
  export interface Country {
      name: string;
  }

  export interface Genre{
    name: string;
}
  
  export interface Rating {
    kp:                 number;
    imdb:               number;
    filmCritics:        number;
    russianFilmCritics: number;
    await?:             number;
}

  export interface Backdrop {
      url:        string;
      previewUrl: string;
  }

  