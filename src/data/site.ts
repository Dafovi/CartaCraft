export const site = {
  name: 'CartaCraft',
  twitch: 'https://www.twitch.tv/cartafilou',
  disclaimer: 'CartaCraft es un proyecto independiente de la comunidad y no está afiliado, patrocinado ni respaldado por Mojang Studios o Microsoft.',
};

export const pathTo = (path = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;
export const navigation = [
  { label: 'Inicio', path: '', icon: 'home' },
  { label: 'Proyecto', path: 'proyecto/', icon: 'star' },
  { label: 'Launcher', path: 'launcher/', icon: 'cube' },
  { label: 'Privacidad', path: 'privacidad/', icon: 'shield' },
  { label: 'Contacto', path: 'contacto/', icon: 'mail' },
] as const;

export const statuses = [
  { title: 'Servidor privado', status: 'Probado localmente', tone: 'green', icon: 'cube', text: 'Un servidor de pruebas para construir la aventura. No está abierto al público.' },
  { title: 'Mods propios', status: 'En desarrollo', tone: 'purple', icon: 'sparkles', text: 'Contenido personalizado y nuevas experiencias para el mundo de CartaCraft.' },
  { title: 'Launcher', status: 'En desarrollo', tone: 'amber', icon: 'laptop', text: 'Acceso, instalación y actualizaciones: funciones previstas para el launcher.' },
  { title: 'Comunidad', status: 'En formación', tone: 'blue', icon: 'people', text: 'Un proyecto impulsado por Carta y pensado para compartir con su comunidad.' },
] as const;
