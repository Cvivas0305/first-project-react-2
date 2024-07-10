import React from "react";

import People from "./assets/people.svg";
import Arrow from "./assets/arrow.svg";
import Trash from "./assets/trash.shg"


import {
    Container,
    H1,
    Image,
    ContainerItens,
    InputLabel,
    Input,
    Button,
    User
} from "./styles";

function APP() {
    const users = [
        { id: Math.random(), name: "Rodolfo", age: 28 },
        { id: Math.random(), name: "Maria", age: 21 },
    ];

    return (
        <Container>
            <Image alt="logo-image" src={People} />
            <ContainerItens>
                <H1>Olá</H1>

                <InputLabel>NOME</InputLabel>
                <Input placeholder="Nome" />

                <InputLabel>Idade</InputLabel>
                <Input placeholder="Idade" />

                <Button>
                    Cadastrar <img alt="seta" src={Arow} />
                </Button>
                <ul>
                    {users.map((user) => (
                        <User key={user.id}>
                           <p>{user.name}</p> - <p>{user.age}</p>
                            <button><img src={Trash} alt="lata-de-lixo"/></button>
                        </User>
                    ))}
                </ul>
            </ContainerItens>
        </Container>
    );
}

export default APP

