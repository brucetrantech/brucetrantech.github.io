import Menu from '../../Menu';
import { Section } from '../../../components';
import Intro from './Intro';
import Branch from './Branch';

export default function Header() {
  return (
    <Section background='linear-gradient(178.7deg, #e4ecff 1.11%, rgba(234, 240, 255, 0) 103.22%);'>
      <Menu />
      <Intro />
      <Branch />
    </Section>
  );
}
