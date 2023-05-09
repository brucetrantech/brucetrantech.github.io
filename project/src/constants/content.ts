import AnsibleLogo from '../public/full/AnsibleLogo.svg';
import GithubLogo from '../public/full/GithubLogo.svg';
import JenkinLogo from '../public/full/JenkinLogo.svg';
import KubernetesLogo from '../public/full/KubernetesLogo.svg';
import TerraformLogo from '../public/full/TerraformLogo.svg';

export const BRANCH_LIST = [
  {
    logo: GithubLogo,
    alt: 'Github',
  },
  {
    logo: TerraformLogo,
    alt: 'Terraform',
  },
  {
    logo: AnsibleLogo,
    alt: 'Ansible',
  },
  {
    logo: JenkinLogo,
    alt: 'Jenkins',
  },
  {
    logo: KubernetesLogo,
    alt: 'Kubernetes',
  },
];

export type Prices = {
  type: string;
  description: string;
  price: number;
  price_desc: string;
  detail: {
    content: string;
    highlight?: boolean;
  }[];
};

export const PRICES = [
  {
    type: 'Consulting',
    description: 'Review, consult and get the solution details for client',
    price: 1000,
    price_desc: 'At least for a contract',
    detail: [
      {
        content: 'Review and analysis requirements',
      },
      {
        content: 'Design the system architectures',
      },
      {
        content: 'Get props & cons in the solutions',
      },
      {
        content: 'Return document costs details',
      },
      {
        content: 'Return the architecture details',
      },
    ],
  },
  {
    type: 'Release',
    description: 'Join to develop and release the infrastructure',
    price: 3000,
    price_desc: 'At least for a contract',
    detail: [
      {
        content: 'Apply all process from Consulting',
        highlight: true,
      },
      {
        content: 'Develop following the solution',
      },
      {
        content: 'Insure the quality of the system',
      },
      {
        content: 'Transfer all resource for the client',
      },
      {
        content: 'Maintain 6 months after release',
        highlight: true,
      },
    ],
  },
  {
    type: 'Maintain',
    description: 'Help to fix bugs, improve, optimize or upgrade the services',
    price: 2000,
    price_desc: 'At least for a contract',
    detail: [
      {
        content: 'Review and report all issues',
      },
      {
        content: 'Get some methods for maintaince',
      },
      {
        content: 'Fix bugs and improve the system',
      },
      {
        content: 'Transfer all resources for the client',
      },
      {
        content: 'Maintain 6 or 12 months',
        highlight: true,
      },
    ],
  },
] as Prices[];
