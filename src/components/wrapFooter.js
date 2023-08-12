import { Footer } from 'flowbite-react';
import { BsGithub } from 'react-icons/bs';

function WrapFooter() {
  return (
    <Footer container className="px-10 py-4">
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Footer.Copyright
            by="Desenvolvido por Guilherme Laureano"
            href="https://github.com/guilhermelaureano"
            year={2023}
          />
          <Footer.Icon
            href="https://github.com/guilhermelaureano"
            icon={BsGithub}
          />
        </div>
        <Footer.LinkGroup col>
          <Footer.Title className="mb-2" title="Sobre" />
          <Footer.Link href="https://github.com/guilhermelaureano/improved-youtube-search">
            Página Vercel deste projeto
          </Footer.Link>
          <Footer.Link href="https://github.com/guilhermelaureano/improved-youtube-search">
            Repositório github deste projeto
          </Footer.Link>
        </Footer.LinkGroup>
      </div>
    </Footer>
  );
}

export default WrapFooter;
