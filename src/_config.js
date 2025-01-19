export const process = {
  dev: true,
};

export const site = {
  home: process.dev ? "https://localhost:8080/" : "https://tocode.ru",
};

export const app = {
  title: 'Molenhauer',
};



export const links = [
  {
    title: "Services",
    alias: 'Services',
    url: '/',
  },
  {
    title: 'Know How',
    alias: 'Know How',
    url: '#',
  },
  {
    title: 'Projects & References',
    alias: 'Projects & References',
    url: '#',
  },
  {
    title: 'Our Company',
    alias: 'Our Company',
    url: '#',
  },
  {
    title: 'Our Clients',
    alias: 'Our Clients',
    url: '#',
  },
  {
    title: 'Careers',
    alias: 'Careers',
    url: '#',
  },
];