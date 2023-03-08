import React from 'react';
import {Container, Box, Breadcrumbs, Divider, Typography} from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import useWindowDimensions from "../../dimensions";

export default function Denuncia() {

  const { width, height } = useWindowDimensions();
  const [images, setImages] = React.useState([]);

  const handleSubmit = async e => {
    e.preventDefault();

    console.log(images);
    console.log(e.target.local.value)
  }

  const handleRemoveItem = name => {
    setImages(images.filter(item => item.name !== name))
}

  return (
    <Box  sx={{ display: "flex", flexDirection: "column", mt: 12 }}>
      <Box
        sx={{
          display: "flex",
          flex: 1,
          flexDirection: { xs: "column", md: "row" },
          pt: 5,
          background: "#f7f7f7",
          backgroundSize: "cover",
          paddingBlock: 5,
        }}
      >
        <Container
          maxWidth="sm"
          sx={{
            display: "flex",
            flex: 1,
            alignItems: "center",
            mb: { xs: 1, md: 0 },
            justifyContent: { xs: "center", md: "flex-start" },
          }}
        >
          <span className="menu-title" style={{ marginLeft: width < 768 ? 0 : 15 }}>
            ENVIE-NOS A SUA DENUNCIA
          </span>
        </Container>
        <Container
          maxWidth="sm"
          sx={{
            display: "flex",
            flex: 1,
            alignItems: "center",
            justifyContent: { xs: "center", md: "flex-end" },
          }}
        >
          <Breadcrumbs
            separator={
              <NavigateNextIcon fontSize="medium" sx={{ color: "#b2924b" }} />
            }
            aria-label="breadcrumb"
            style={{marginRight: width < 768 ? 0 : 15}}
          >
            <a href="#" className="bcrumb">
              Home
            </a>
            <span className="bcrumb">Denuncie</span>
          </Breadcrumbs>
        </Container>
      </Box>

      <Box sx={{ paddingInline: { xs: 1, sm: 2.5, md: 4 }}}>
        <Container
          maxWidth="lg"
          sx={{
            display: "flex",
            flexDirection: "column",
            bgcolor: "#f2f2f2",
            mt: 10,
            pt: 3,
          }}
        >
          <form onSubmit={handleSubmit}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
          <h3 className="info-pessoais" style={{ alignSelf: width < 768 ? 'center' : 'flex-start' }}>Informações da denuncia</h3>
          <Divider sx={{ width: 200, height: 2, bgcolor: "#b2924b", mb: 5, alignSelf: width < 768 ? 'center' : 'flex-start' }} />
          <label htmlFor="local">Local do ocorrido:</label>
          <input
              className="input-style"
              id="local"
              name="local"
              style={{ marginBottom: 30, maxWidth: 500 }}
          />
          <label htmlFor="imagens">Selecione as imagens:</label>
          <input type="file" name="imagens" id='imagens' onChange={ (e) => { setImages( oldArray => [ ...oldArray, e.target.files[0] ]) }} style={{ marginTop: 10 }}/>
          <Box  style={{ marginTop: 10, marginBottom: '30px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            {
              images.map((item, index)=>
              <Box key={index} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <button onClick={()=>{handleRemoveItem(item.name)}} style={{ marginBottom: 2, marginRight: 4 }}>x</button>
                <Typography sx={{ fontSize: 13, fontWeight: 'bold'}}>{item.name}</Typography>
              </Box>

              )
            }
          </Box>
          <button type="submit">Enviar</button>
          </Box>
          </form>
        </Container> 
      </Box>
    </Box>
  )
}
