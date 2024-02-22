export interface Person {
  id: string;
  name: string;
  homeworld: {
    name: string;
  };
  filmConnection: {
    films: { title: string }[];
  };
  species?: {
    language: string;
  };
}
