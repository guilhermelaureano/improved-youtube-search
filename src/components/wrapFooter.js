import { Footer } from 'flowbite-react';

function WrapFooter() {
  return (
    <Footer container>
      <Footer.Copyright
        by="Desenvolvido por Guilherme Laureano"
        href="https://github.com/guilhermelaureano"
        year={2023}
      />
      <Footer.LinkGroup>
        <Footer.Link href="https://github.com/guilhermelaureano/improved-youtube-search">
          Página Vercel deste projeto
        </Footer.Link>
        <Footer.Link href="https://github.com/guilhermelaureano/improved-youtube-search">
          Repositório github deste projeto
        </Footer.Link>
      </Footer.LinkGroup>
    </Footer>
  );
}

export default WrapFooter;
