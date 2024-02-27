import Logo from '../../../components/ui/logo';

export default function Footer(): JSX.Element {
  return (
    <footer className="footer container">
      <Logo footerClass width={64} height={33}/>
    </footer>
  );
}
