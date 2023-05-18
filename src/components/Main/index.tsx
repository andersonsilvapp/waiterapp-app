import { Categories } from '../Categories';
import { Header } from '../Header';
import { Menu } from '../Menu';

import { Container, CategoriesContainer, MenuContainer, Footer, FooterContainer } from './styles';

export function Main() {
  return (
    <>
      <Container>
        <Header />

        <CategoriesContainer>
          <Categories />
        </CategoriesContainer>

        <MenuContainer>
          <Menu />
        </MenuContainer>

      </Container>

      <Footer>
        <FooterContainer>
        </FooterContainer>
      </Footer>
    </>
  );
}
