import { el } from '../utils/dom.js';

export const Contact = (mount) => {
  const section = el('section', { className: 'main-card' }, [
    el('h2', {}, ['Contacto']),
    el('p', { className: 'text-muted mt-1' }, [
      'Canales oficiales de atencion para soporte y gestion del servicio.'
    ]),
    el('div', { className: 'contact-grid mt-2' }, [
      contactCard(
        'Capcol S.A.S.',
        [
          ['Pagina web', 'www.capcol.com.co', 'https://www.capcol.com.co'],
          ['Direccion', 'Calle 20 # 18-62, Caramanta, Antioquia, Colombia'],
          ['Telefono', '3502624742'],
          ['Correo', 'capcol@capcol.com.co', 'mailto:capcol@capcol.com.co']
        ]
      ),
      contactCard(
        'TU EMPRESA',
        [
          ['Pagina web', 'www.serviciosintegralessi.com/', 'https://serviciosintegralessi.com/'],
          ['Direccion', 'Calle 34A # 77-10 - Medellín'],
          ['Telefono', '313 697 2266 - 311 711 4900'],
          ['Correo', 'serinteglaresltda@hotmail.com', 'mailto:serinteglaresltda@hotmail.com']
        ]
      )
    ])
  ]);

  mount.replaceChildren(section);
};

function contactCard(title, rows = []) {
  return el('article', { className: 'contact-card' }, [
    el('h3', { className: 'contact-card__title' }, [title]),
    ...rows.map(([label, value, href]) =>
      el('p', { className: 'contact-card__row' }, [
        el('strong', {}, [`${label}: `]),
        href ? el('a', { href, target: '_blank', rel: 'noopener noreferrer' }, [value]) : value
      ])
    )
  ]);
}
