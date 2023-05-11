import { getPermalink, getBlogPermalink, } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Fund Operations',
      href: getPermalink('/fund-operations'),
    },
    {
      text: 'Founders Stories',
      href: getPermalink('/founders-stories'),
    },
    {
      text: 'Ten X Playbook',
      href: getPermalink('/ten-x-playbook'),
    },
  ],
};

export const footerData = {
  links: [
    {
      text: 'Fund Operations',
      href: getPermalink('/fund-operations'),
    },
    {
      text: 'Founders Stories',
      href: getBlogPermalink(),
    },
    {
      text: 'Ten X Playbook',
      href: getPermalink('/ten-x-playbook'),
    },
  ],
};
