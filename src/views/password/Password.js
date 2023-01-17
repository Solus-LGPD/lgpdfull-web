import { CContainer } from '@coreui/react';
import React from 'react';

const Password = () => {
   
return (
    <CContainer maxWidth="sm">
        <h1 className="text-2xl text-center mb-3">Redefinir Senha</h1>
        <p className="text-left text-sm mb-2">Lhe enviaremos um e-mail com mais informações sobre como redefinir sua senha. </p>
        <TextField
            fullWidth
            label="E-mail"
            margin="normal"
            name="email"
            type="email"
            variant="outlined"
        />
        <div sx={{ py: 2 }}>
            <button
            color="primary"
            fullWidth
            size="large"
            type="submit"
            variant="contained"
            >
            Enviar E-mail
            </button>
        </div>
    </CContainer>
)
}

export default Password;