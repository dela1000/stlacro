export type PhotoImage = string;

export type Section = {
  id: string;
  title: string;
  images: PhotoImage[];
};

export type Testimonial = {
  testimonial: string;
  signature: string;
};
