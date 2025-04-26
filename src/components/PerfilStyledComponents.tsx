import { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

interface GitHubUser {
  avatar_url: string;
  name: string;
  bio: string | null;
  public_repos: number;
}

// Estilos com Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
  max-width: 250px;
  padding: 8px;
  border: 1px solid #d1d5db;
  border-radius: 4px;
  font-size: 16px;
  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.5);
  }
`;

const Button = styled.button`
  width: 100%;
  max-width: 250px;
  margin-top: 8px;
  padding: 8px;
  background-color: #3b82f6;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: #2563eb;
  }
`;

const ProfileContainer = styled.div`
  text-align: center;
  margin-top: 16px;
`;

const Avatar = styled.img`
  width: 128px;
  height: 128px;
  border-radius: 50%;
  margin: 0 auto 16px;
`;

const Name = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const Bio = styled.p`
  color: #4b5563;
  font-size: 16px;
  margin-bottom: 8px;
`;

const Repos = styled.p`
  color: #1f2937;
  font-size: 16px;
`;

function PerfilStyledComponents() {
  const [username, setUsername] = useState<string>('');
  const [user, setUser] = useState<GitHubUser | null>(null);

  const handleSearch = async () => {
    if (!username.trim()) {
      return;
    }

    setUser(null);

    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      setUser(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <Input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Digite um usuário do GitHub"
      />
      <Button onClick={handleSearch}>Buscar</Button>

      {user && (
        <ProfileContainer>
          <Avatar src={user.avatar_url} alt="Foto do perfil" />
          <Name>{user.name || username}</Name>
          <Bio>{user.bio || 'Sem bio'}</Bio>
          <Repos>Repositórios públicos: {user.public_repos}</Repos>
        </ProfileContainer>
      )}
    </Container>
  );
}

export default PerfilStyledComponents;