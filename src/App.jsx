import { Menu, Container, Grid, Card, Icon } from "semantic-ui-react";
import "./App.css";

function App() {
  return (
    <>
      
      <Menu borderless>
        <Container>
          <Menu.Item>Inicio</Menu.Item>
          <Menu.Item>Nuestro Estudio</Menu.Item>
          <Menu.Item>Áreas de Práctica</Menu.Item>
          <Menu.Item>Equipo</Menu.Item>
          <Menu.Item>Noticias</Menu.Item>
          <Menu.Item>Contacto</Menu.Item>
        </Container>
      </Menu>

      
      <div className="hero">
        <div className="overlay">
          <div className="logo-circle">
  <h1>mpv</h1>
</div>
          <h2>Musa · Paredes · Vera</h2>
          <p>ABOGADOS</p>
        </div>
      </div>

      
      <Container style={{ marginTop: "40px", marginBottom: "40px" }}>
        <Grid columns={4} stackable>

          <Grid.Column>
            <Card fluid>
              <Card.Content textAlign="center">
                <Card.Header>EXPERIENCIA</Card.Header>

                <Icon
                  name="balance scale"
                  size="huge"
                  style={{ margin: "20px 0" }}
                />

                <Card.Description>
                  Más de 20 años de experiencia profesional.
                </Card.Description>
              </Card.Content>
            </Card>
          </Grid.Column>

          <Grid.Column>
            <Card fluid>
              <Card.Content textAlign="center">
                <Card.Header>COMPROMISO</Card.Header>

                <Icon
                  name="handshake"
                  size="huge"
                  style={{ margin: "20px 0" }}
                />

                <Card.Description>
                  Comprometidos con nuestros clientes.
                </Card.Description>
              </Card.Content>
            </Card>
          </Grid.Column>

          <Grid.Column>
            <Card fluid>
              <Card.Content textAlign="center">
                <Card.Header>DEDICACIÓN</Card.Header>

                <Icon
                  name="users"
                  size="huge"
                  style={{ margin: "20px 0" }}
                />

                <Card.Description>
                  Trabajo enfocado en resultados.
                </Card.Description>
              </Card.Content>
            </Card>
          </Grid.Column>

          <Grid.Column>
            <Card fluid>
              <Card.Content textAlign="center">
                <Card.Header>CONFIABILIDAD</Card.Header>

                <Icon
                  name="lock"
                  size="huge"
                  style={{ margin: "20px 0" }}
                />

                <Card.Description>
                  Ética y profesionalismo garantizados.
                </Card.Description>
              </Card.Content>
            </Card>
          </Grid.Column>

        </Grid>
      </Container>
      
<div className="institucional">
  <div className="institucional-overlay">
    <Container text textAlign="center">
      <h2>
        Forman parte de MPV Abogados profesionales de prestigiosas
        universidades del país.
      </h2>

      <p>
        Especializados a nivel local e internacional,
        comprometidos con los intereses de sus clientes
        y con los valores que inspiran el estudio.
      </p>
    </Container>
  </div>
</div>


<footer className="footer">
  <p>
    Andrés de Fuenzalida 17, oficina 11.
    Providencia, Santiago de Chile.
  </p>

  <p>Fono: (562) 22310990</p>

  <p>Correo: contacto@mpvabogados.cl</p>
</footer>
    </>
  );
}

export default App;